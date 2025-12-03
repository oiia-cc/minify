import axios from "axios";
import { useFileStore } from "../stores/file.store";
import { useUploadStore } from "../stores/upload.store";

export const uploadService = async (file) => {
    const setProgress = useUploadStore.getState().setProgress;
    const clearProgress = useUploadStore.getState().clearProgress;
    const addOrUpdateFile = useFileStore.getState().addOrUpdateFile;

    console.log(">>>upfile:", file);


    const formData = new FormData();
    formData.append('file', file);
    const token = JSON.parse(localStorage.getItem("token"))

    const res = await axios.post('/api/v1/files', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${token}`
        },
        onUploadProgress: e => {
            if (e.total) {
                const percent = Math.round(e.loaded * 100 / e.total);
                setProgress(file.name, percent);
            }
        }
    });
    clearProgress(file.name);

    addOrUpdateFile(res.data.file);

    return res.data.file;
}