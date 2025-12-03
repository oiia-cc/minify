import { filesApi } from "../api/files.api";
import { useFileStore } from "../stores/file.store";
import { useEffect } from "react";

export const useFiles = () => {
    const files = useFileStore(s => s.files);
    const setFiles = useFileStore(s => s.setFiles);

    const refresh = async () => {
        const res = await filesApi.list();
        setFiles(res.data.data);
    };

    useEffect(() => {
        refresh();
    }, []);

    return { files, refresh };
};
