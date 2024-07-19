"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { products } from "@/utils/consts";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { useStore } from "@/utils/store";

const Products = () => {
  const { showProductModal, setShowProductModal, addToCart, cart } = useStore();

  return (
    <div className="w-full min-h-screen relative bg-[#f0f2f4] flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className=" flex flex-col items-center w-11/12 z-20 ">
        <h2 className=" text-base text-[#408289] mt-[7.5vh]">Products</h2>
        <p className=" text-[2rem] text-center font-bold text-[#181818]">
          {"View our products and shop now"}
        </p>
      </div>
      <div className=" flex w-10/12 mt-[5vh]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          initialSlide={2}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 250,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow]}
          className="swiper_container"
        >
          {[...products].map((product, index) => (
            <SwiperSlide
              className="w-full flex flex-col items-center bg-red-100 justify-center"
              key={index}
            >
              <a
                onClick={() => {
                  setShowProductModal({ show: true, id: product.id });
                }}
                className=" flex z-30 flex-col items-center cursor-pointer justify-center w-full border-[2px] border-black rounded-2xl bg-white p-8"
              >
                <div className=" flex h-[30vh] w-[20vh] relative">
                  <Image
                    src={product.image}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>

                <p className=" text-black text-xs mt-4">HYDROSHARK</p>
                <p className={` text-[2rem] font-semibold text-black `}>
                  {product.title}
                </p>
                <p className=" text-black text-sm mt-4">{product.quanity}</p>
                <p className=" text-black mt-1 text-sm">₹{product.price}</p>
                <button className=" flex flex-col items-center transition-all duration-200 mt-4 px-6 border-[1px] border-black py-2 bg-transparent text-black hover:bg-black hover:text-white">
                  <p className=" mt-1">ADD TO CART</p>
                </button>
              </a>
            </SwiperSlide>
          ))}

          {/* <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <iIoMdArrowBack />
            </div>
            <div className="swiper-button-next slider-arrow">
              <IoMdArrowForward />
            </div>
            <div className="swiper-pagination"></div>
          </div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
