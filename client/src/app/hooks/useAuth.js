import { useQuery } from '@tanstack/react-query';
import { authApi } from '../../api/auth.api';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();

  const me = useQuery({
    queryKey: ['me'],
    queryFn: async function fetchMe() {
      const res = await authApi.me();
      console.log('--->>>mee:', res.data);

      return res.data;
    },
  });

  const login = async (email, password) => {
    const res = await authApi.login({ email, password });

    const token = res.data.access_token;
    localStorage.setItem('token', JSON.stringify(token));
    console.log('--->>>login:', res.data);
    const user = res.data.user;
    return user;
  };

  const logout = async () => {
    const res = await authApi.me();
    localStorage.removeItem('token');
    console.log('--->>>logout');
    navigate('/login');
    return { ok: true };
  };

  return { login, user: me.data, logout };
};
