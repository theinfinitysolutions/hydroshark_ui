"use client";
import React from "react";
import ShopNowButton from "./ShopNow";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import Swiper core and required modules
import { Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";

const items = [
  {
    title: "Hydroshark Lemon",
    image: "/lemoncan.webp",
    price: 99,
  },
  {
    title: "Hydroshark Mango",
    image: "/mangocan.webp",
    price: 99,
  },
  // {
  //   title: "Hydroshark Lemon Crate",
  //   image: "/cratelemon.png",
  //   price: 799,
  // },
  // {
  //   title: "Hydroshark Mango Crate",
  //   image: "/cratemango.png",
  //   price: 799,
  // },
  // {
  //   title: "Hydroshark T-Shirt",
  //   image: "/tshirt.png",
  //   price: 399,
  // },
];

const ProductSectionHome1 = () => {
  const router = useRouter();

  return (
    <div className=" flex flex-col items-center justify-center bg-black  overflow-hidden relative w-full h-full py-[5vh] lg:h-full lg:pt-[10vh] lg:pb-[5vh]">
      <div className="absolute z-0 inset-0 h-full w-full bg-[linear-gradient(to_right,#ababab55_1px,transparent_1px),linear-gradient(to_bottom,#ababab55_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className=" flex flex-col lg:flex-row justify-between w-10/12 h-full z-20">
        <div className=" flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 h-[60vh]">
          <h2 className=" text-lg lg:text-2xl text-center lg:text-start text-[#45dced]">
            Hydroshark Products
          </h2>
          <h2 className=" text-white text-4xl lg:text-[4rem] font-semibold text-center lg:text-start lg:leading-[3.85rem] text-pretty lg:mt-4">
            {"GEAR UP FOR NEXT ADVENTURE WITH HYDROSHARK"}
          </h2>
          <div className=" flex flex-col  text-center lg:text-start mt-4">
            <ShopNowButton onClick={() => router.push("/products")} />
          </div>
        </div>
        <div className=" flex flex-col w-full  lg:w-1/2 items-center lg:items-end justify-center py-8 lg:pl-8">
          <div className="h-[60vh] w-11/12 lg:w-[30vw] bg-white rounded-3xl flex flex-row relative ">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
              className="mySwiper w-full h-full bg-pi"
            >
              {items.map((item, index) => (
                <SwiperSlide key={index} className="">
                  <div className=" flex flex-col items-center justify-center w-full h-full">
                    <div className=" flex h-[30vh] w-[30vh] relative">
                      <Image
                        src={item.image}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <p className=" text-black text-sm mt-4">{"HYDROSHARK"}</p>
                    <p
                      className={` text-[1.5rem] font-semibold text-[#f26c4f] `}
                    >
                      {item.title}
                    </p>
                    <p className=" text-black mt-1 text-sm">
                      ₹{item.price} / 250ml
                    </p>
                    <button className=" flex flex-col items-center transition-all duration-200 mt-4 px-6 border-[1px] border-black py-2 bg-transparent text-black hover:bg-black hover:text-white">
                      <p className=" mt-1">ADD TO CART</p>
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionHome1;
