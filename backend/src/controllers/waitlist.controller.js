import Waitlist from "../models/waitlist.model.js";
import { sendEmail } from "../services/zoho-mail.service.js";

const sendWaitlistNotification = async (email) => {


    const textContent = `
Hi,

Thank you for joining the Cap Wallet waitlist — and welcome to the early circle of people who believe in a more open, fair, and simple digital economy.

We’re building a wallet that protects you, guides you, and gives you real control — so anyone, anywhere, can participate without fear or confusion.

You’ll get early updates, private previews, and first access to the beta as we launch the future of the open economy.

Welcome to Cap Wallet.
We’re excited you’re here.💙
  `;

    await sendEmail({
        to: email,
        subject: 'You’re officially in 💙',
        text: textContent,
        from: process.env.ZOHO_EMAIL_USER,
    });
};

export const joinWaitlist = async (req, res) => {
    const { email } = req.body;
    try {
        if (!email) {
            return res.status(400).json({ message: "Email is required." });
        }
        const existingEntry = await Waitlist.findOne({ email });
        if (existingEntry) {
            return res.status(400).json({ message: "Email already exists in the waitlist." });
        }
        const newEntry = new Waitlist({ email });
        await newEntry.save();
        await sendWaitlistNotification(email);
        res.status(201).json({ message: "Successfully joined the waitlist!" });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "Email already exists in the waitlist." });
        }
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};