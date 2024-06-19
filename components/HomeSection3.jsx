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
      className=" flex flex-row justify-between  overflow-hidden w-full h-screen max-h-screen"
    >
      <div className="flex w-[35%] h-full max-h-screen overflow-hidden">
        <ParallaxScroll targetRef={targetRef} />
      </div>
      <div className=" relative flex flex-col items-start w-[65%] h-full px-8">
        <div class="absolute -left-[75vw] -bottom-[0vh] overflow-hidden [--offset:40vw]  bg-black rotate-[90deg] z-40 [--move-initial:calc(-25%_+_var(--offset))] [--move-final:calc(-50%_+_var(--offset))] ">
          <div
            class="min-w-screen w-[150vw] flex flex-row py-2 border-y-[2px] border-white border-dotted items-center relative  transform-[translate3d(var(--move-initial),0,0)] animate-marqueebanner [animation-play-state:running]"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"225mg caffine"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"0g sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"Electrolytes"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"vitamins"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"minerals"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"0g sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"225mg caffine"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"0g sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"minerals"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"0g sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"225mg caffine"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"0g sugar"}</span>
          </div>
        </div>
        <p className=" text-4xl text-[#3997a1] italic mt-[10vh]">
          {"Experience the Hydroshark Difference "}
        </p>
        <div className=" flex flex-row gap-x-2 justify-start items-center ">
          <p
            className={`${caveat.className} text-[3rem] mr-4 font-semibold col-span-2 text-black`}
          >
            Loved by{" "}
          </p>
          <p className=" text-[4rem] font-semibold col-span-3 text-black">
            ATHLETES
          </p>
          <div className="h-[8vh] w-[8vh] -mt-2 relative">
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/asset2.svg"}
              layout="fill"
            />
          </div>
          <p className=" text-[4rem] font-semibold col-span-3 text-black">
            GAMERS
          </p>
          <div className="h-[6vh] w-[6vh] -mt-2 relative">
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/asset3.png"}
              layout="fill"
            />
          </div>
        </div>
        <div className=" flex flex-row gap-x-2 justify-start items-center">
          <div className="h-[8vh] w-[8vh]  -mt-2 relative">
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/asset7.png"}
              layout="fill"
            />
          </div>
          <p className=" text-[4rem] font-semibold col-span-3 text-black">
            DAREDEVILS
          </p>
          <div className="h-[8vh] w-[8vh]   -mt-2 relative">
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/asset5.png"}
              layout="fill"
            />
          </div>
        </div>
        <div className="h-[15vh] w-[15vh] mt-4 animate-rotate absolute right-[10vh] bottom-[10vh]">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/hydroshark.png"}
            layout="fill"
          />
        </div>
        <div className=" h-[30vh]  w-[10vw] transform rotate-[-80deg] absolute right-[25vw] -bottom-[5vh] ">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/lemoncan.png"}
            layout="fill"
          />
        </div>
        <div className=" h-[30vh]  w-[10vw] transform rotate-[-60deg] absolute right-[22.5vw] bottom-[10vh] ">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/mangocan.png"}
            layout="fill"
          />
        </div>
        <div className=" h-[30vh]  w-[10vw] transform rotate-[-40deg] absolute right-[16vw] bottom-[25vh] ">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/lemoncan.png"}
            layout="fill"
          />
        </div>
        <div className=" h-[30vh]  w-[10vw] transform rotate-[-20deg] absolute right-[8vw] bottom-[35vh] ">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/mangocan.png"}
            layout="fill"
          />
        </div>
        <div className=" h-[30vh]  w-[10vw] transform rotate-[0deg] absolute -right-4 bottom-[37.5vh] ">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/lemoncan.png"}
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
