import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';
import toast from 'react-hot-toast';

export const useWaitlistStore = create((set) => ({
  isLoading: false,

  joinWaitlist: async (data) => {
    set({ isLoading: true });
    try {
      await axiosInstance.post('/waitlist/join', data);
      toast.success('Successfully joined the waitlist!');
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Failed to join the waitlist.');
    } finally {
      set({ isLoading: false });
    }
  },
}));
