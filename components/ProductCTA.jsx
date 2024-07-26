"use client";
import React, { useEffect } from "react";
import { useStore } from "@/utils/store";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProductCTA = (props) => {
  useEffect(() => {
    console.log("ProductCTA props", props);
  }, [props]);
  return (
    <div
      className="w-full flex flex-col items-center justify-center p-8
     bg-white"
    >
      <div className=" flex flex-row w-full justify-center ">
        <div className=" flex w-[20vh] h-[20vh] relative">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + props.image}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className=" flex flex-col items-start justify-center ml-[5vw] w-[40vw]">
          <div className=" w-full flex flex-row items-center justify-between">
            <div className=" flex flex-col items-start">
              <p className=" text-xs text-black font-semibold">
                {"HYDROSHARK"}
              </p>
              <p className=" text-2xl text-black font-semibold">
                {props.title}
              </p>
            </div>
            <p className=" text-base mt-2 text-black font-normal">{`₹${props.price} / ${props.quanity}`}</p>
          </div>
          <p className=" text-sm text-black font-normal">{props.description}</p>
          <button className=" flex flex-col items-center transition-all duration-200 mt-4 px-6 border-[1px] border-black py-2 bg-transparent text-black hover:bg-black hover:text-white">
            <p className=" mt-1">ADD TO CART</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCTA;
