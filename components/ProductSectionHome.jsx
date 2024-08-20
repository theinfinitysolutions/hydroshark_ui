"use client";
import React, { useRef } from "react";
import Image from "next/image";

const ProductSectionHome = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-black  overflow-hidden relative w-full h-[60vh] lg:h-full lg:pt-[5vh] lg:pb-[15vh]">
      <p className=" absolute top-[20vh] text-[5rem] lg:text-[14rem] z-40 text-white/70 leading-[5rem] lg:leading-[13rem]">
        HYDROSHARK
      </p>
      <div className="absolute z-0 inset-0 h-screen -top-[10vh] w-full bg-[linear-gradient(to_right,#ababab55_1px,transparent_1px),linear-gradient(to_bottom,#ababab55_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      {/* <div className=" w-[30vh] h-[30vh] -right-8 -bottom-8 absolute z-0">
        <Image
          src={"/bgasset14.png"}
          fill
          style={{ objectFit: "cover" }}
          alt="hydroshark img carousel"
        />
      </div> */}

      {/* <div className=" w-[10vh] h-[10vh] right-[10vh] animate-rotate top-[10vh] absolute z-0">
        <Image
          src={"/bgasset15.png"}
          fill
          style={{ objectFit: "cover" }}
          alt="hydroshark img carousel"
        />
      </div>

      <div className=" w-[10vh] h-[10vh] left-[10vh] animate-rotate bottom-[10vh] absolute z-0">
        <Image
          src={"/bgasset15.png"}
          fill
          style={{ objectFit: "cover" }}
          alt="hydroshark img carousel"
        />
      </div> */}

      {/* <div className=" flex flex-col items-center w-full z-20">
        <h2 className=" text-base text-[#408289]">Hydroshark Products</h2>
        <p className=" text-[2.5rem] text-center font-bold text-[#181818]">
          {"Hydrate and Gear Up: Your Ultimate Refresh Collection"}
        </p>
      </div> */}
      <div className="flex flex-row justify-center items-center w-full z-40 ">
        <div className=" flex flex-col items-center  w-[20%]">
          <div className=" flex h-[40vh] w-[20vh] relative">
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/lemoncan.webp"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className=" text-white text-sm mt-4">HYDROSHARK</p>
          <p className={` text-[2rem]  font-semibold text-[#308918] `}>
            {"LEMON"}
          </p>
          <p className=" text-white mt-1 text-sm">₹99 / 250ml</p>
          <button
            onClick={() => {}}
            className=" flex flex-col items-center transition-all duration-200 mt-4 px-6 border-[1px] border-white py-2 bg-transparent text-white hover:bg-white hover:text-black"
          >
            <p className=" mt-1">ADD TO CART</p>
          </button>
        </div>
        <div className=" flex flex-col items-center  w-[20%]">
          <div className=" flex h-[40vh] w-[20vh] relative">
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/mangocan.webp"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className=" text-white text-sm mt-4">HYDROSHARK</p>
          <p className={` text-[2rem] font-semibold text-[#dfd434] `}>
            {"MANGO"}
          </p>
          <p className=" text-white mt-1 text-sm">₹99 / 250ml</p>
          <button className=" flex flex-col items-center transition-all duration-200 mt-4 px-6 border-[1px] border-white py-2 bg-transparent text-white hover:bg-white hover:text-black">
            <p className=" mt-1">ADD TO CART</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionHome;
