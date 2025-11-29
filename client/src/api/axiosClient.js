import axios from 'axios';

const axiosClient = axios.create({
    baseURL: '/api/'
});

axiosClient.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

export default axiosClient;