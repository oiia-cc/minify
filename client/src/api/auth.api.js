import axiosClient from './axiosClient';

export const authApi = {
  login: (data) => axiosClient.post('/auth/login', data),
  me: async () => {
    console.log('fetchMe called[api]', new Date().toISOString());
    const res = await axiosClient.get('/auth/me');

    return res;
  },
  logout: () => axiosClient.get('/auth/me'),
};
