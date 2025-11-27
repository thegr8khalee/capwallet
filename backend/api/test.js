// Simple test endpoint for Vercel serverless function
export default function handler(req, res) {
  res.status(200).json({ message: 'Test endpoint is working!' });
}
