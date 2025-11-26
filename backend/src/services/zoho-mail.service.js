// services/zoho.service.js
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const ZOHO_API_BASE_URL = 'https://mail.zoho.com/api';
const ZOHO_ACCOUNTS_URL = 'https://accounts.zoho.com/oauth/v2/token';

/**
 * Refresh Zoho access token using refresh token
 */
const refreshAccessToken = async () => {
    try {
        const response = await axios.post(ZOHO_ACCOUNTS_URL, null, {
            params: {
                refresh_token: process.env.ZOHO_REFRESH_TOKEN,
                client_id: process.env.ZOHO_CLIENT_ID,
                client_secret: process.env.ZOHO_CLIENT_SECRET,
                grant_type: 'refresh_token',
            },
        });

        return response.data.access_token;
    } catch (error) {
        console.error('❌ Failed to refresh Zoho access token:', error.message);
        throw new Error('Zoho authentication failed');
    }
};

/**
 * Get valid access token (refresh if needed)
 */
let cachedAccessToken = null;
let tokenExpiry = null;

const getAccessToken = async () => {
    // Return cached token if still valid
    if (cachedAccessToken && tokenExpiry && Date.now() < tokenExpiry) {
        return cachedAccessToken;
    }

    // Refresh token
    cachedAccessToken = await refreshAccessToken();
    // Zoho tokens typically expire in 1 hour, cache for 50 minutes
    tokenExpiry = Date.now() + 50 * 60 * 1000;

    return cachedAccessToken;
};

/**
 * Create email payload for Zoho API
 */
const createEmailPayload = (to, subject, textContent, htmlContent, from) => {
    const fromEmail = from || process.env.ZOHO_EMAIL_USER;

    return {
        fromAddress: fromEmail,
        toAddress: to,
        subject: subject,
        content: htmlContent || textContent,
        mailFormat: htmlContent ? 'html' : 'plaintext',
    };
};

/**
 * Send email using Zoho Mail API
 */
export const sendEmail = async ({ to, subject, text, html, from }) => {
    try {
        const accessToken = await getAccessToken();
        const accountId = process.env.ZOHO_ACCOUNT_ID;

        if (!accountId) {
            throw new Error('ZOHO_ACCOUNT_ID not configured in environment variables');
        }

        const payload = createEmailPayload(to, subject, text, html, from);

        const response = await axios.post(
            `${ZOHO_API_BASE_URL}/accounts/${accountId}/messages`,
            payload,
            {
                headers: {
                    'Authorization': `Zoho-oauthtoken ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log('✅ Email sent successfully via Zoho Mail');
        return {
            success: true,
            messageId: response.data.data?.messageId,
            status: response.data.status,
        };
    } catch (error) {
        console.error('❌ Zoho Mail API error:', error.response);

        if (error.response) {
            const status = error.response.status;

            if (status === 401) {
                console.error('Authentication failed - check OAuth2 tokens');
            } else if (status === 403) {
                console.error('Permission denied - check Zoho Mail API permissions');
            } else if (status === 429) {
                console.error('Rate limit exceeded - too many requests');
            } else if (status === 400) {
                console.error('Bad request - check email parameters:', error.response.data);
            }
        }

        throw error;
    }
};

/**
 * Get account details (useful for finding account ID)
 */
export const getAccountDetails = async () => {
    try {
        const accessToken = await getAccessToken();

        const response = await axios.get(
            `${ZOHO_API_BASE_URL}/accounts`,
            {
                headers: {
                    'Authorization': `Zoho-oauthtoken ${accessToken}`,
                },
            }
        );

        return response.data.data;
    } catch (error) {
        console.error('❌ Failed to get account details:', error.message);
        throw error;
    }
};


/**
 * Verify Zoho Mail API connection
 */
export const verifyConnection = async () => {
    try {
        // Use getAccountDetails to verify connection, as the /profile endpoint often results in a 404.
        const accounts = await getAccountDetails();

        if (accounts && accounts.length > 0) {
            const primaryAccount = accounts.find(a => a.isPrimary) || accounts[0];
            console.log('✅ Zoho Mail API connected. Primary Account:', accounts);
            return true;
        } else {
            console.error('❌ Zoho Mail API connected, but no accounts found. Check permissions/configuration.');
            return false;
        }
    } catch (error) {
        // Error is already logged by getAccountDetails if it fails
        return false;
    }
};


export default { sendEmail, verifyConnection, getAccountDetails };
