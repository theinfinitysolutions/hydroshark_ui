"use client";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useStore } from "@/utils/store";

const CartCTA = () => {
  const { setCartSidebar } = useStore();
  return (
    <button
      onClick={() => {
        setCartSidebar({ show: true });
      }}
      style={{ zIndex: 80 }}
      className=" fixed lg:hidden bottom-4 left-4 flex flex-col items-center bg-[#181818] h-[6vh] w-[6vh] justify-center rounded-full shadow-md "
    >
      <FaShoppingCart className=" text-white text-2xl" />
    </button>
  );
};

export default CartCTA;
