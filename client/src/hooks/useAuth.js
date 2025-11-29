import { authApi } from "../api/auth.api";
import { useAuthStore } from "../stores/auth.store";

export const useAuth = () => {
    const setUser = useAuthStore((s) => s.setUser);
    const login = async (email, password) => {
        const res = await authApi.login({ email, password });

        const token = res.data.access_token;
        localStorage.setItem("token", JSON.stringify(token));

        const user = res.data.user;
        setUser(user);

        return true;
    }

    return { login };
}