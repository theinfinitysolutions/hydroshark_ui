"use client";
import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Login from "./AuthComponents/Login";
import Signup from "./AuthComponents/SignUp";
import { useStore } from "@/utils/store";
import Image from "next/image";
import { PiCoinsFill } from "react-icons/pi";

const HydrosharkCoinsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { showHydrosharkCoinsModal, setShowHydrosharkCoinsModal } = useStore();

  useEffect(() => {
    setIsOpen(showHydrosharkCoinsModal.show);
  }, [showHydrosharkCoinsModal]);

  const handleClose = () => {
    setShowHydrosharkCoinsModal({ show: false });
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

        <div className=" w-full flex flex-col items-center">
          <div className=" flex flex-row justify-start items-center">
            <PiCoinsFill className=" text-2xl text-black" />
            <h2 className=" text-black text-xl ml-2">HydroShark Coins</h2>
          </div>

          <div className=" w-11/12 flex flex-col items-start">
            <p className=" text-black text-base mt-4">
              Introducing the Hydroshark Rewards Program!
            </p>

            <p className=" text-black text-base mt-2">
              Earn Hydroshark Coins with every purchase of Hydroshark cans and
              unlock exclusive Gymwear and accessories. Here’s how it works:
            </p>

            <p className=" text-black font-bold text-base mt-2">
              Box of 4 pieces = 25 points
            </p>
            <p className=" text-black font-bold text-base ">
              Box of 6 pieces = 40 points
            </p>
            <p className=" text-black font-bold text-base ">
              Box of 24 pieces = 150 points
            </p>

            <p className=" text-black text-base mt-4">
              {
                "Every Hydroshark Coin is worth 1 ₹ and can be redeemed for our wide range of Gymwear (excluding core products). Start collecting today and enjoy the perks of being a part of the Hydroshark community! (TnC Apply)"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HydrosharkCoinsModal;
