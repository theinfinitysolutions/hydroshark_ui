"use client";
import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Login from "./AuthComponents/Login";
import Signup from "./AuthComponents/SignUp";
import { useStore } from "@/utils/store";
import Image from "next/image";
import { PiCoinsFill } from "react-icons/pi";

const PrivacyPolicyModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { showPrivacyPolicyModal, setShowPrivacyPolicyModal } = useStore();

  useEffect(() => {
    setIsOpen(showPrivacyPolicyModal.show);
  }, [showPrivacyPolicyModal]);

  const handleClose = () => {
    setShowPrivacyPolicyModal({ show: false });
  };

  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } z-50 inset-0 flex items-center justify-center bg-black/10`}
    >
      <div className="bg-white w-11/12 lg:w-5/12 min-h-[40vh] relative overflow-y-scroll rounded-xl flex flex-col items-center shadow-xl py-[5vh]">
        <div className=" absolute right-4 top-4">
          <button
            onClick={() => {
              handleClose();
            }}
          >
            <IoCloseOutline className=" text-black text-xl" />
          </button>
        </div>

        <iframe
          src={process.env.NEXT_PUBLIC_API_URL + "/privacypolicy.html"}
          className="w-full h-[70vh] lg:h-[60vh] px-4"
        ></iframe>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
