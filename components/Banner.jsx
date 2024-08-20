"use client";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

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
  const [currentOption, setCurrentOption] = useState(0);
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
        <p className=" text-white text-sm">
          {existingOptions[currentOption].title}
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
