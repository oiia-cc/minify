import { create } from 'zustand';

export const usePagnigateStore = create((set) => ({
  pagnigateMeta: {
    curentPage: 0,
    totalPages: 0,
    total: 0,
    limit: 20,
    hasNext: false,
    skip: 0,
  },

  setPagnigateMeta: (data) =>
    set({
      pagnigateMeta: data,
    }),
}));
