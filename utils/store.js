import { create } from "zustand";

export const useStore = create((set) => ({
  sidebar: {
    show: false,
  },
  setShow: (sidebar) => set((state) => (state.sidebar = sidebar)),
  cartSidebar: {
    show: false,
  },
  setCartSidebar: (cartSidebar) =>
    set((state) => (state.cartSidebar = cartSidebar)),
  cart: [],
  addToCart: (cart) => set((state) => (state.cart = cart)),
  showProductModal: {
    id: "",
    show: false,
  },
  setShowProductModal: (showProductModal) =>
    set((state) => (state.showProductModal = showProductModal)),
}));
