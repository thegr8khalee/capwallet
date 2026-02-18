import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';
import toast from 'react-hot-toast';

export const useCareerStore = create((set) => ({
  isLoading: false,
  submitted: false,

  submitApplication: async (data) => {
    set({ isLoading: true });
    try {
      await axiosInstance.post('/careers/apply', data);
      set({ submitted: true });
      toast.success('Application submitted successfully!');
      return true;
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || 'Failed to submit application.'
      );
      return false;
    } finally {
      set({ isLoading: false });
    }
  },

  resetForm: () => set({ submitted: false, isLoading: false }),
}));
