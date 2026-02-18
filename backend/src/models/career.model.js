import mongoose from 'mongoose';

const careerApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  phone: {
    type: String,
    trim: true,
    default: '',
  },
  linkedin: {
    type: String,
    trim: true,
    default: '',
  },
  background: {
    type: String,
    required: true,
  },
  motivation: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'Co-Founder',
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

const CareerApplication = mongoose.model('CareerApplication', careerApplicationSchema);
export default CareerApplication;
