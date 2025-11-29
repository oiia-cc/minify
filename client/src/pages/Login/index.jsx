import { useState } from "react";

import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            await login(email, password);
            navigate("/dashboard");
        } catch (err) {
            console.log(">>>lgin failed", err);
        }
    }

    const handleLoginTest = async () => {
        try {
            await login("huu3675@gmail.com", "123456");
            navigate("/dashboard");
        } catch (err) {
            console.log(">>>lgin failed", err);
        }
    }


    const handleLoginAdmin = async () => {
        try {
            await login("admin@gmail.com", "123456");
            navigate("/dashboard");
        } catch (err) {
            console.log(">>>lgin failed", err);
        }
    }

    return (
        <div >
            Login:
            <label>
                email
                <input type='text' onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                password
                <input type='text' onChange={e => setPassword(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLoginAdmin}>Test Admin</button>
            <button onClick={handleLoginTest}>Test User1</button>
        </div>
    )

}
