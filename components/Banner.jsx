"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import instance from "@/utils/instance";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const existingOptions = [
  {
    title: "New products coming soon!",
    end_date: "2022-12-31",
  },
  {
    title: "Free shipping on all orders above Rs.450/-",
    end_date: "2022-12-31",
  },
];

const Banner = () => {
  const [loading, setLoading] = React.useState(false);
  const [currentOption, setCurrentOption] = React.useState(0);
  const [activeBanners, setActiveBanners] = React.useState(existingOptions);

  const getBanners = () => {
    setLoading(true);
    instance
      .get("/admin/banners/")
      .then((res) => {
        const active = res.data.results.filter((item) => {
          return new Date(item.end_date) > new Date();
        });

        setActiveBanners(active);

        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });
  };

  return (
    <div className=" w-full h-[5vh] flex flex-row bg-black items-center px-4 lg:px-8 justify-between">
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        speed={1000}
        slidesPerView={1}
        modules={[Autoplay]}
        spaceBetween={0}
        className="w-full h-[5vh]"
      >
        {activeBanners.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex flex-row items-center justify-around lg:justify-center ">
              <div className=" w-[12.5vw] h-[4vh] relative">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/icon7.png"}
                  fill
                  objectFit="contain"
                />
              </div>
              <p className=" w-[75vw] lg:w-[50vw] text-center text-white mt-1 text-xs lg:text-sm">
                {item.title}
              </p>
              <div className=" w-[12.5vw]  h-[4vh] relative">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/icon6.png"}
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
