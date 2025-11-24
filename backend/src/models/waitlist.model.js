import mongoose from 'mongoose';

const waitlist = new mongoose.Schema({
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

const Waitlist = mongoose.model('Waitlist', waitlist);
export default Waitlist;