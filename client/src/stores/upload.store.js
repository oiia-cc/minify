import { create } from 'zustand';

export const useUploadStore = create((set) => ({
    uploads: {},

    setProgress: (fileName, progress) => set(state => ({
        uploads: { ...state.uploads, [fileName]: progress }
    })),

    clearProgress: fileName => set(state => {
        const u = { ...state.uploads };
        delete u[fileName];
        return { uploads: u }
    }),

}))