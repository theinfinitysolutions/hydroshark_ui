"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

const CartCard = ({ image, price, title }) => {
  return (
    <div className=" w-full flex flex-col items-start p-4 border-[1px] border-black mb-3">
      <div className=" flex flex-row w-full justify-between">
        <div className=" flex flex-col items-start w-[20%] h-[10vh] relative">
          <Image src={image} layout="fill" objectFit="contain" />
        </div>
        <div className=" w-[60%] h-full flex flex-col items-start  px-4">
          <p className=" text-base text-black">HYDROSHARK {title}</p>
          <p className=" text-sm text-black">₹{price}</p>
          <div className="flex flex-row justify-between items-center gap-x-2 mt-1 py-1 px-4 border-[1px] border-black">
            <a className=" text-black text-sm">
              <LuPlus />
            </a>
            <p className=" text-black text-sm mt-1">1</p>
            <a className=" text-black text-sm">
              <LuMinus />
            </a>
          </div>
        </div>
        <div className=" w-[20%] h-full flex flex-col items-center justify-center">
          <MdDeleteOutline className=" text-black text-xl" />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
