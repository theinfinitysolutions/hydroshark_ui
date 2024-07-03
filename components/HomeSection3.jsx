"use client";
import React, { useRef } from "react";
import { Caveat } from "next/font/google";
import { motion } from "framer-motion";
import ParallaxScroll from "./ParallaxScroll";
import Image from "next/image";

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

const HomeSection3 = () => {
  const targetRef = useRef(null);
  return (
    <div
      ref={targetRef}
      className=" flex flex-row justify-between  overflow-hidden w-full h-[60vh] lg:h-screen max-h-screen"
    >
      <div className="hidden lg:flex w-[35%] h-full max-h-screen overflow-hidden">
        <ParallaxScroll targetRef={targetRef} />
      </div>
      <div className=" relative flex flex-col items-start w-screen lg:w-[65%] h-full px-4 lg:px-8">
        <div className="hidden lg:block absolute -left-[75vw] -bottom-[0vh] overflow-hidden [--offset:60vw]  bg-black rotate-[90deg] z-40 [--move-initial:calc(-25%_+_var(--offset))] [--move-final:calc(-50%_+_var(--offset))] ">
          <div
            className="min-w-screen w-[150vw] flex flex-row py-2 border-y-[2px] border-white border-dotted items-center relative  transform-[translate3d(var(--move-initial),0,0)] animate-marqueebanner [animation-play-state:running]"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">
              {"No caffeine"}
            </span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">{"Low sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">
              {"Electrolytes"}
            </span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">{"Vitamins"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">{"Minerals"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">{"Low sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">
              {"No caffeine"}
            </span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">{"Low sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">{"Minerals"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">{"Low sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">
              {"No caffeine"}
            </span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">{"Vitamins"}</span>
          </div>
        </div>
        <p className=" text-xlgl w-full lg:text-3xl text-[#3997a1] italic mt-[5vh] lg:mt-[10vh]">
          {"Experience the Hydroshark Difference "}
        </p>
        <div className=" flex flex-row  gap-x-2 justify-start items-center ">
          <p
            className={`${caveat.className} text-[1rem] lg:text-[2.15rem] lg:mr-4 font-semibold text-black`}
          >
            Loved by{" "}
          </p>
          <div className=" flex flex-row items-center gap-x-1 justify-start">
            <p className=" text-[1.8rem] lg:text-[3.5rem] font-semibold lg:leading-[3.5rem]  text-black">
              ATHLETES
            </p>
            <div className=" h-[4vw] w-[4vw]  lg:h-[8vh] lg:w-[8vh] -mt-2 relative">
              <Image
                src={process.env.NEXT_PUBLIC_API_URL + "/asset2.svg"}
                layout="fill"
              />
            </div>
          </div>
          <div className=" flex flex-row items-center gap-x-1 justify-start">
            <p className=" text-[2rem] lg:text-[3.5rem] font-semibold lg:leading-[3.5rem] col-span-3 text-black">
              GAMERS
            </p>
            <div className="h-[4vw] w-[4vw]  lg:h-[8vh] lg:w-[8vh]  relative">
              <Image
                src={process.env.NEXT_PUBLIC_API_URL + "/asset3.png"}
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-row gap-x-2 justify-start items-center">
          <div className="h-[4vw] w-[4vw]  lg:h-[8vh] lg:w-[8vh]  -mt-2 relative">
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/asset7.png"}
              layout="fill"
            />
          </div>
          <p className=" text-[2rem] lg:text-[3.5rem] font-semibold col-span-3 text-black">
            DAREDEVILS
          </p>
          <div className="h-[5vw] w-[5vw]  lg:h-[8vh] lg:w-[8vh]   -mt-2 relative">
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/asset5.png"}
              layout="fill"
            />
          </div>
        </div>
        <div className=" h-[20vw] w-[20vw] lg:h-[15vh] lg:w-[15vh] mt-4 animate-rotate absolute right-8 bottom-8 lg:right-[10vh] lg:bottom-[10vh]">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/hydroshark.png"}
            layout="fill"
          />
        </div>
        <div className=" absolute bottom-0 right-0 w-[80vw] h-[80vw] lg:h-[60vh] lg:w-[60vh]">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/curvedCans.png"}
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
