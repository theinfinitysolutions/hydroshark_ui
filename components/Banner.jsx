"use client";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import instance from "@/utils/instance";

const Banner = () => {
  const [loading, setLoading] = React.useState(false);
  const [activeBanners, setActiveBanners] = React.useState([]);

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

  if (activeBanners == 0) {
    return null;
  }

  return (
    <div className=" py-2 w-full flex flex-row bg-black items-center px-8 justify-between">
      <button
        onClick={() =>
          setCurrentOption((currentOption + 1) % existingOptions.length)
        }
        className=" text-white/40 rounded-lg"
      >
        <FaAngleLeft />
      </button>
      <div className=" flex flex-row items-center justify-center w-full">
        <p className=" text-white text-xs lg:text-sm">
          {activeBanners[currentOption].title}
        </p>
      </div>
      <button
        onClick={() =>
          setCurrentOption(
            (currentOption - 1 + existingOptions.length) %
              existingOptions.length
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
