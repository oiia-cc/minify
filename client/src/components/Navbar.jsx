import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth.store";


export default function Navbar() {

    const user = useAuthStore(s => s.user);
    const logout = useAuthStore(s => s.logout);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    }


    return (
        <nav style={{ display: 'flex', gap: '20px', padding: '10px', borderBottom: '1px solid #ccc' }}>
            <Link to='/'>Home</Link>
            {user && <Link to='/dashboard'>Dashboard</Link>}
            {user?.role === 'admin' && <Link to='/admin'>Admin Panel</Link>}
            {user?.role === 'user' && <Link to='/profile'>Profile</Link>}
            {!user && <Link to='/login'>Login</Link>}
            {user && <button onClick={handleLogout} >Logout</button>}

        </nav>
    )
}