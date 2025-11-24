import Waitlist from "../models/waitlist.model.js";

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
        res.status(201).json({ message: "Successfully joined the waitlist!" });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "Email already exists in the waitlist." });
        }
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};