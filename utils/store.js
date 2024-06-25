import { create } from "zustand";

export const useStore = create((set) => ({
  sidebar: {
    show: false,
  },
  setShow: (sidebar) => set((state) => (state.sidebar = sidebar)),
}));
