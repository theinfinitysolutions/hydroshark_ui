"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import instance from "@/utils/instance";

const existingOptions = [
  {
    title: "10% off on all orders above 1000",
    end_date: "2022-12-31",
  },
  {
    title: "Free shipping on all orders above 500",
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
    <div className=" w-full h-[5vh] flex flex-row bg-black items-center px-8 justify-between">
      <button
        onClick={() =>
          setCurrentOption((currentOption + 1) % activeBanners.length)
        }
        className=" text-white/40 rounded-lg py-2"
      >
        <FaAngleLeft />
      </button>
      <div className="w-[15vw] h-full">
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + "/icon6.png"}
          fill
          objectFit="cover"
        />
      </div>
      <div className=" flex flex-row items-center justify-center w-full">
        <p className=" text-white text-xs lg:text-sm">
          {activeBanners[currentOption].title}
        </p>
      </div>
      <div className="w-[15vw] h-full">
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + "/icon7.png"}
          fill
          objectFit="cover"
        />
      </div>
      <button
        onClick={() =>
          setCurrentOption(
            (currentOption - 1 + activeBanners.length) % activeBanners.length
          )
        }
        className=" text-white/40 rounded-lg"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Banner;
