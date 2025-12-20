import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth.store';

export default function Navbar() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '0 10px',
        borderBottom: '1px solid #ccc',
        flex: 0.2,
      }}
    >
      {user && (
        <span style={{ color: 'red', fontWeight: 700, alignSelf: 'center' }}>
          Hello {user.handle}
        </span>
      )}

      <NavLink
        to="/"
        style={({ isActive }) => ({
          background: isActive ? 'orange' : 'none',
        })}
      >
        {' '}
        Home
      </NavLink>
      {user && (
        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({
            background: isActive ? 'orange' : 'none',
          })}
        >
          Dashboard
        </NavLink>
      )}
      {user?.role === 'admin' && (
        <NavLink
          to="/admin"
          style={({ isActive }) => ({
            background: isActive ? 'orange' : 'none',
          })}
        >
          Admin Panel
        </NavLink>
      )}

      {user?.role === 'user' && (
        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            background: isActive ? 'orange' : 'none',
          })}
        >
          Profile
        </NavLink>
      )}
      {!user && (
        <NavLink
          to="/login"
          style={({ isActive }) => ({
            background: isActive ? 'orange' : 'none',
          })}
        >
          Login
        </NavLink>
      )}

      {user && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}
