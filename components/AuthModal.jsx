"use client";
import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Login from "./AuthComponents/Login";
import Signup from "./AuthComponents/SignUp";
import { useStore } from "@/utils/store";
import Image from "next/image";

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { showAuthModal, setShowAuthModal } = useStore();
  const [showSignup, setShowSignup] = useState(true);

  useEffect(() => {
    setIsOpen(showAuthModal.show);
  }, [showAuthModal]);

  const handleClose = () => {
    setShowAuthModal({ show: false, message: "" });
    setShowSignup(false);
  };

  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } z-50 inset-0 flex items-center justify-center bg-black/30`}
    >
      <div className="bg-white w-11/12 lg:w-5/12 min-h-[40vh] relative overflow-y-scroll  flex flex-col items-center shadow-xl py-[5vh]">
        <div className=" absolute right-4 top-4">
          <button
            onClick={() => {
              handleClose();
            }}
          >
            <IoCloseOutline className=" text-black text-xl" />
          </button>
        </div>

        <div className=" h-[7.5vh] w-[7.5vh] lg:h-[10vh] lg:w-[10vh] relative">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/hydroshark.png"}
            fill
            alt="hydroshark"
          />
        </div>
        <p className="text-3xl text-black my-4 font-bold">Hydroshark</p>
        <div className=" w-11/12 lg:w-8/12 flex flex-col items-center">
          {showSignup ? (
            <Signup
              BackToLogin={() => {
                setShowSignup(false);
              }}
            />
          ) : (
            <Login
              onSignUp={() => {
                setShowSignup(true);
              }}
            />
          )}
        </div>

        <div className="text-black text-sm my-4">
          {showSignup ? "Already have an account?" : "Don't have an account?"}
          <span
            className="text-blue-500 cursor-pointer ml-1"
            onClick={() => {
              setShowSignup(!showSignup);
            }}
          >
            {showSignup ? "Login" : "Sign Up"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
