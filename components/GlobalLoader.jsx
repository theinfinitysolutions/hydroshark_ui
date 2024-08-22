"use client";
import React, { useState, useEffect } from "react";
import { useStore } from "@/utils/store";
import Spinner from "./Spinner";

const GlobalLoader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { showLoading, setShowLoading } = useStore();

  useEffect(() => {
    setIsOpen(showLoading.show);
  }, [showLoading]);

  const handleClose = () => {
    setShowLoading({ show: false });
  };

  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } z-50 inset-0 flex items-center justify-center bg-white/60`}
    >
      <Spinner loading={isOpen} color="#000000" size={64} />
    </div>
  );
};

export default GlobalLoader;
