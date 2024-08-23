"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { InstagramEmbed } from "react-social-media-embed";
import { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const socialLinks = [
  "https://www.instagram.com/reel/C--lNdsPBXl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/C-iMio3PYwe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/C9ho_ItOkxD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/C9RcFnxJB8-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/C9O5ARBJgwx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/C-AhRQMPm0Q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
];

const Events = () => {
  return (
    <div className="w-screen min-h-screen overflow-hidden relative bg-[#f0f2f4] flex flex-col justify-center items-center">
      <div className="absolute inset-0 h-full w-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className=" flex flex-col items-center lg:items-start w-[90vw] my-[10vh]">
        <h2 className="text-black text-[2rem] lg:text-[4rem] lg:leading-[4rem] font-bold ">
          Social Media
        </h2>
        <p className="text-black text-sm text-center lg:text-start mt-2 w-11/12 lg:w-6/12">
          {
            " Dive into our social scene! Join us on the journey to better hydration and a healthier lifestyle and share your journey with us! .Don't miss out - follow us now! "
          }
        </p>
        <div className="hidden w-full lg:flex flex-row gap-x-4 mt-[5vh]">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            className="mySwiper w-full"
          >
            {socialLinks.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      zIndex: 10,
                    }}
                    className=" w-full"
                  >
                    <InstagramEmbed url={item} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className=" w-full flex lg:hidden flex-row gap-x-4 mt-[5vh]">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {socialLinks.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      zIndex: 10,
                    }}
                  >
                    <InstagramEmbed height={600} width={330} url={item} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Events;
