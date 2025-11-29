import { create } from "zustand";
import { authApi } from "../api/auth.api";

export const useAuthStore = create((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    logout: () => {
        localStorage.removeItem("token");
        set({ user: null });
    },

    init: async () => {
        const token = JSON.parse(localStorage.getItem("token"));

        if (!token) return;

        try {
            const me = await authApi.me();
            console.log(">>>", me);

            set({ user: me.data });
        } catch (err) {
            localStorage.removeItem("token");
            set({ user: null });
        }
    }
}))