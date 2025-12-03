import { create } from "zustand";

export const useModalStore = create((set) => ({
    modalName: null,
    modalData: null,

    openModal: (name, data = null) =>
        set({ modalName: name, modalData: data }),

    closeModal: () =>
        set({ modalName: null, modalData: null }),
}));
