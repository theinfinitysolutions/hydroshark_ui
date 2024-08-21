"use client";
import React, { useEffect } from "react";
import { useStore } from "@/utils/store";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Spinner from "./Spinner";

const ProductCTA = ({ handleAddToCart, loading, selectedProduct }) => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center p-8
     bg-white"
    >
      <div className=" flex flex-row w-full justify-center ">
        <div className=" flex w-[20vh] h-[20vh] relative">
          <Image
            src={
              selectedProduct?.product_title == "LEMON"
                ? "/lemoncan.webp"
                : "/mangocan.webp"
            }
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className=" flex flex-col items-start justify-center ml-[5vw] w-[40vw]">
          <div className=" w-full flex flex-row items-center justify-between">
            <div className=" flex flex-col items-start">
              <p className=" text-xs text-black font-semibold">
                {"HYDROSHARK"}
              </p>
              <p className=" text-2xl text-black font-semibold">
                {selectedProduct?.product_title}
              </p>
            </div>
          </div>
          <p className=" text-sm text-black font-normal">
            {selectedProduct?.product_description}
          </p>
          <button
            onClick={() => {
              handleAddToCart();
            }}
            className=" flex flex-col items-center transition-all duration-200 mt-4 px-6 border-[1px] border-black py-2 bg-transparent text-black hover:bg-black hover:text-white"
          >
            {loading ? (
              <Spinner color="#fff" size={24} loading={loading} />
            ) : (
              <p className=" mt-1">ADD TO CART</p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCTA;
