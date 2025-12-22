import { create } from 'zustand';
import { authApi } from '../api/auth.api';

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null });
  },

  init: async () => {
    const token = JSON.parse(localStorage.getItem('token'));

    if (!token) return;

    try {
      // const me = await authApi.me();

      const me = {
        access_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxM2NhZTc5LThlOTYtNGQ3OC1iZjlkLTE1NjUzYTJjOTZmMCIsImVtYWlsIjoiaHV1MzY3NUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImhhbmRsZSI6InVzZXIxIiwiaWF0IjoxNzY2NDEyNTQzLCJleHAiOjE3NjY0OTg5NDN9.Cu26DZplRLXpJvCo_ZkR7y08xvx52M7dx30vijIWBNU',
        refresh_token: null,
        user: {
          id: '613cae79-8e96-4d78-bf9d-15653a2c96f0',
          email: 'huu3675@gmail.com',
          handle: 'user1',
          role: 'user',
        },
      };
      console.log('>>>', me);

      set({ user: me.data });
    } catch (err) {
      localStorage.removeItem('token');
      set({ user: null });
    }
  },
}));
