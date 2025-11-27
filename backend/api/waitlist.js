import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { sendEmail } from '../src/services/zoho-mail.service.js';

dotenv.config();

const waitlistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

const Waitlist = mongoose.models.Waitlist || mongoose.model('Waitlist', waitlistSchema);

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

export default async function handler(req, res) {
  await connectDB();
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }
  try {
    const existingEntry = await Waitlist.findOne({ email });
    if (existingEntry) {
      return res.status(400).json({ message: 'Email already exists in the waitlist.' });
    }
    const newEntry = new Waitlist({ email });
    await newEntry.save();
    // Send notification email
    const textContent = `\nHi,\n\nThank you for joining the Cap Wallet waitlist — and welcome to the early circle of people who believe in a more open, fair, and simple digital economy.\n\nWe’re building a wallet that protects you, guides you, and gives you real control — so anyone, anywhere, can participate without fear or confusion.\n\nYou’ll get early updates, private previews, and first access to the beta as we launch the future of the open economy.\n\nWelcome to Cap Wallet.\nWe’re excited you’re here.💙\n  `;
    await sendEmail({
      to: email,
      subject: 'You’re officially in 💙',
      text: textContent,
      from: process.env.ZOHO_EMAIL_USER,
    });
    res.status(201).json({ message: 'Successfully joined the waitlist!' });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already exists in the waitlist.' });
    }
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
}
