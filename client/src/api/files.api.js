import axiosClient from './axiosClient';


export const filesApi = {
    list: async (params = {}) => {
        const qs = new URLSearchParams(
            Object.fromEntries(
                Object.entries(params).filter(([_, v]) => v != null && v !== "")
            )
        ).toString();

        return axiosClient.get(`/v1/files?${qs}`)
    }
}