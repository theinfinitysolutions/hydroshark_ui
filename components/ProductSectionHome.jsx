"use client";
import React, { useRef } from "react";
import Image from "next/image";

const ProductSectionHome = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-[#f0f2f4]  overflow-hidden relative w-full h-[60vh] lg:h-screen">
      {/* <div className=" w-[30vh] h-[30vh] -right-8 -bottom-8 absolute z-0">
        <Image
          src={"/bgasset14.png"}
          layout="fill"
          objectFit="cover"
          alt="hydroshark img carousel"
        />
      </div> */}

      <div className=" w-[10vh] h-[10vh] right-[10vh] animate-rotate top-[10vh] absolute z-0">
        <Image
          src={"/bgasset15.png"}
          layout="fill"
          objectFit="cover"
          alt="hydroshark img carousel"
        />
      </div>

      <div className=" w-[10vh] h-[10vh] left-[10vh] animate-rotate bottom-[10vh] absolute z-0">
        <Image
          src={"/bgasset15.png"}
          layout="fill"
          objectFit="cover"
          alt="hydroshark img carousel"
        />
      </div>
      <p className=" absolute top-[30vh] text-[5rem] lg:text-[14rem] text-black/20 leading-[5rem] lg:leading-[13rem]">
        HYDROSHARK
      </p>
      <div className=" flex flex-col items-center w-full z-20">
        <h2 className=" text-base text-[#408289]"> </h2>
        <p className=" text-[2rem] text-center font-bold text-[#181818]">
          {"India's First Carbonated Hydration Drink"}
        </p>
      </div>
      <div className="flex flex-row justify-around items-center w-full z-40 mt-[10vh]">
        <div className=" flex flex-col items-center  w-[20%]">
          <div className=" flex h-[20vh] w-[20vh] relative">
            <Image src={"/tshirt.png"} layout="fill" objectFit="contain" />
          </div>
          <p className=" text-black text-sm mt-4">HYDROSHARK</p>
          <p className={` text-[1.5rem] font-semibold text-[#f26c4f] `}>
            {"GYM T-SHIRT"}
          </p>
          <p className=" text-black mt-1 text-sm">₹499 / 250ml</p>
          <button className=" flex flex-col items-center transition-all duration-200 mt-4 px-6 border-[1px] border-black py-2 bg-transparent text-black hover:bg-black hover:text-white">
            <p className=" mt-1">ADD TO CART</p>
          </button>
        </div>
        <div className=" flex flex-col items-center  w-[20%]">
          <div className=" flex h-[40vh] w-[20vh] relative">
            <Image src={"/lemoncan.webp"} layout="fill" objectFit="contain" />
          </div>
          <p className=" text-black text-sm mt-4">HYDROSHARK</p>
          <p className={` text-[2rem]  font-semibold text-[#308918] `}>
            {"LEMON"}
          </p>
          <p className=" text-black mt-1 text-sm">₹99 / 250ml</p>
          <button className=" flex flex-col items-center transition-all duration-200 mt-4 px-6 border-[1px] border-black py-2 bg-transparent text-black hover:bg-black hover:text-white">
            <p className=" mt-1">ADD TO CART</p>
          </button>
        </div>
        <div className=" flex flex-col items-center  w-[20%]">
          <div className=" flex h-[40vh] w-[20vh] relative">
            <Image src={"/mangocan.webp"} layout="fill" objectFit="contain" />
          </div>
          <p className=" text-black text-sm mt-4">HYDROSHARK</p>
          <p className={` text-[2rem] font-semibold text-[#dfd434] `}>
            {"MANGO"}
          </p>
          <p className=" text-black mt-1 text-sm">₹99 / 250ml</p>
          <button className=" flex flex-col items-center transition-all duration-200 mt-4 px-6 border-[1px] border-black py-2 bg-transparent text-black hover:bg-black hover:text-white">
            <p className=" mt-1">ADD TO CART</p>
          </button>
        </div>
        <div className=" flex flex-col items-center  w-[20%]">
          <div className=" flex h-[20vh] w-full relative">
            <Image src={"/cratelemon.png"} layout="fill" objectFit="contain" />
          </div>
          <p className=" text-black text-sm mt-4">HYDROSHARK</p>
          <p className={` text-[1.5rem] font-semibold  text-[#308918] `}>
            {"LEMON"}
          </p>
          <p className=" text-black mt-1 text-sm">{"₹499 / 250ml X 12 "}</p>
          <button className=" flex flex-col items-center transition-all duration-200 mt-4 px-6 border-[1px] border-black py-2 bg-transparent text-black hover:bg-black hover:text-white">
            <p className=" mt-1">ADD TO CART</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionHome;
