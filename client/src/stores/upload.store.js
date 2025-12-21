import { create } from "zustand";

export const useUploadStore = create((set) => ({
  isLoading: false,
  setIsLoading: (value) => set({ loading: value }),
}));
