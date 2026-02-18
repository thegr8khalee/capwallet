import CareerApplication from '../models/career.model.js';
import { sendEmail } from '../services/zoho-mail.service.js';

/**
 * Send confirmation email to the applicant
 */
const sendApplicantConfirmation = async (email, fullName) => {
  const textContent = `
Hi ${fullName},

Thank you for applying to the Co-Founder role at Cap Wallet.

We've received your application and our team is reviewing it carefully. If your background and vision align with ours, we'll reach out to schedule a conversation.

In the meantime, feel free to learn more about us at https://capwallet.app

We appreciate your interest in building the future of finance with us.

Best regards,
The Cap Wallet Team
  `;

  await sendEmail({
    to: email,
    subject: 'We received your application — Cap Wallet',
    text: textContent,
    from: process.env.ZOHO_EMAIL_USER,
  });
};

/**
 * Send internal notification about a new application
 */
const sendInternalNotification = async (application) => {
  const textContent = `
New Co-Founder Application Received

Name: ${application.fullName}
Email: ${application.email}
Phone: ${application.phone || 'Not provided'}
LinkedIn / Portfolio: ${application.linkedin || 'Not provided'}

--- Background ---
${application.background}

--- Motivation ---
${application.motivation}

Applied at: ${new Date(application.appliedAt).toISOString()}
  `;

  await sendEmail({
    to: process.env.ZOHO_EMAIL_USER,
    subject: `New Co-Founder Application: ${application.fullName}`,
    text: textContent,
    from: process.env.ZOHO_EMAIL_USER,
  });
};

export const submitApplication = async (req, res) => {
  const { fullName, email, phone, linkedin, background, motivation } = req.body;

  try {
    if (!fullName || !email || !background || !motivation) {
      return res.status(400).json({
        message: 'Full name, email, background, and motivation are required.',
      });
    }

    // Check for duplicate application by email
    const existingApplication = await CareerApplication.findOne({ email });
    if (existingApplication) {
      return res.status(400).json({
        message: 'An application with this email already exists.',
      });
    }

    const newApplication = new CareerApplication({
      fullName,
      email,
      phone,
      linkedin,
      background,
      motivation,
    });

    await newApplication.save();

    // Send emails (don't block response on email failures)
    try {
      await Promise.all([
        sendApplicantConfirmation(email, fullName),
        sendInternalNotification(newApplication),
      ]);
    } catch (emailError) {
      console.error('⚠️ Email notification failed:', emailError.message);
      // Application is still saved, so we don't fail the request
    }

    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('❌ Career application error:', error);
    if (error.code === 11000) {
      return res.status(400).json({
        message: 'An application with this email already exists.',
      });
    }
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
