"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Transition from "@/components/Transition";
import { motion } from "framer-motion";
import { CanSceneHome } from "@/components/CanModel";

export default function Home() {
  return (
    <Transition>
      <div className="flex min-h-screen bg-white w-screen h-screen z-20 flex-col items-center ">
        <div className="absolute top-[10vh] ">
          <p className="text-[14rem] text-[#00000009] leading-[12rem]">
            HYDROSHARK
          </p>
          <p className="text-[14rem] text-black/10 leading-[12rem]">
            HYDROSHARK
          </p>
          <p className="text-[14rem] text-black/15 leading-[12rem]">
            HYDROSHARK
          </p>
          <p className="text-[14rem] text-black/20 leading-[12rem]">
            HYDROSHARK
          </p>
        </div>
        <div class="absolute overflow-hidden [--offset:40vw] bg-black rotate-[4deg] top-[90vh] z-40 [--move-initial:calc(-25%_+_var(--offset))] [--move-final:calc(-50%_+_var(--offset))] ">
          <div
            class="min-w-screen w-[100vw] flex flex-row py-1 items-center relative  transform-[translate3d(var(--move-initial),0,0)] animate-marqueebanner [animation-play-state:running]"
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
          </div>
        </div>
        <div class="absolute overflow-hidden [--offset:40vw] bg-black rotate-[-4deg] top-[90vh] z-40 [--move-initial:calc(-25%_+_var(--offset))] [--move-final:calc(-50%_+_var(--offset))] ">
          <div
            class="min-w-screen w-[100vw] flex flex-row py-1 items-center relative  transform-[translate3d(var(--move-initial),0,0)] animate-marqueebanner [animation-play-state:running]"
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
          </div>
        </div>

        <div className="flex flex-row w-[90vw] mt-[20vh] relative">
          <div
            style={{ transform: "rotate(15deg)" }}
            className=" h-[60vh] w-[50vh]  animate-bounce transform rotate-[-6deg] absolute z-20 top-[25vh] left-[30%]"
          >
            <Image src={"/redbullcan.png"} objectFit="contain" layout="fill" />
          </div>

          <div className=" h-[60vh] w-[60vh]  animate-bounce transform rotate-3 absolute z-20 top-[25vh] left-[45%]">
            <Image src={"/redbullcan.png"} objectFit="contain" layout="fill" />
          </div>

          <div className="flex flex-col w-1/2 items-start">
            <h2 className=" text-black text-[5rem] font-bold leading-[5rem]">
              {"One stop for all your"} <span>Hydration</span> {"needs"}
            </h2>
            <div className=" w-7/12 flex flex-col mt-[5vh]">
              <div className="flex flex-row justify-between items-center">
                <p className=" text-black text-base">Energy</p>
                <div className="w-9/12 border-[1px] border-[#181818] h-[1vh] rounded-full">
                  <div className="w-11/12 bg-black h-full rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mt-2">
                <p className=" text-black text-base">Caffeine</p>
                <div className="w-9/12 border-[1px] border-[#181818] h-[1vh] rounded-full">
                  <div className="w-/12 bg-black h-full rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mt-2">
                <p className=" text-black text-base">Fatigue</p>
                <div className="w-9/12 border-[1px] border-[#181818] h-[1vh] rounded-full">
                  <div className="w-3/12 bg-black h-full rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end w-1/2 ">
            <div className="flex flex-row justify-between w-10/12 px-8">
              <div className="h-[15vh] w-[15vh] relative flex flex-col items-center justify-center">
                <div className="w-full h-full animate-rotate absolute">
                  <Image src={"/caffeine_curved.png"} layout="fill" />
                </div>
                <div className=" w-[10vh] h-[10vh] relative">
                  <Image src={"/logo_caffeine.png"} layout="fill" />
                </div>
              </div>
              <div className="h-[15vh] w-[15vh] relative flex flex-col items-center justify-center">
                <div className="w-full h-full animate-rotate absolute">
                  <Image src={"/vitamins_curved.png"} layout="fill" />
                </div>
                <div className=" w-[10vh] h-[10vh] relative">
                  <Image src={"/logo_vitamins.png"} layout="fill" />
                </div>
              </div>
              <div className="h-[15vh] w-[15vh] relative flex flex-col items-center justify-center">
                <div className="w-full h-full animate-rotate absolute">
                  <Image src={"/zerosugar_curved.png"} layout="fill" />
                </div>
                <div className=" w-[10vh] h-[10vh] relative">
                  <Image src={"/logo_sugar.png"} layout="fill" />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-end mt-[5vh]">
              <p className=" text-black text-xl font-semibold ">
                Why choose Hydroshark?
              </p>
              <p className="text-black/80 mt-1 w-7/12 text-[0.75rem] text-end leading-[1rem]">
                {
                  "Hydroshark is a new energy drink that is designed to keep you"
                }
                <span> hydrated</span> {"and energized throughout the day"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
