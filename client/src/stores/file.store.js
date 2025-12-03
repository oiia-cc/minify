import { create } from "zustand";


export const useFileStore = create(set => ({
    files: [],

    setFiles: list => set({ files: list }),

    addOrUpdateFile: file => set(state => {
        console.log(">>>aoupdate f:", state.files);
        console.log(">>>aoupdate fid:", file);

        const idx = state.files.findIndex(f => f.id === file.id);

        if (idx === -1) {
            return { files: [...state.files, file] }
        }
        const updated = [...state.files]

        updated[idx] = { ...updated[idx], ...file }
        return { files: updated };
    })
}))