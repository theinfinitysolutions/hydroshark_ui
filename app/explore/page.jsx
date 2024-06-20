"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

const Explore = () => {
  return (
    <div className="w-full min-h-screen relative bg-[#f0f2f4] flex flex-col items-center">
      <div class="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className=" flex flex-col items-center w-11/12 z-20 ">
        <div className=" flex flex-col items-center w-full mt-[10vh]">
          <h2 className=" text-base text-[#408289]">{"Discover Hydroshark"}</h2>
          <p className=" text-[2rem] font-bold text-[#181818]">
            {"India's First Carbonated Hydration Drink"}
          </p>
          <p className=" text-base text-[#181818] text-center px-[10vw] mt-2">
            {
              "At Hydroshark, we saw a glaring gap in the market—there were no tasty, low-sugar hydration drinks available. Most options were unhealthy energy drinks, notorious for their potential risks like ruptured intestines and heart issues. That’s why we created Hydroshark, India’s first carbonated hydration drink."
            }
          </p>
        </div>
        <div className="flex flex-row justify-between w-7/12 mt-[7.5vh] px-8">
          <div className=" flex flex-col items-center w-[20vh]">
            <div className="h-[15vh] w-[15vh] relative flex flex-col items-center justify-center">
              <div className="w-full h-full animate-rotate absolute">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/caffeine_curved.png"}
                  layout="fill"
                />
              </div>
              <div className=" w-[10vh] h-[10vh] relative">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/logo_caffeine.png"}
                  layout="fill"
                />
              </div>
            </div>
            <p className=" text-[#181818] text-base mt-2 font-semibold">
              Low-Sugar
            </p>
            <p className=" text-[#181818]/80 text-xs text-center ">
              {"Enjoy a tasty drink without the health risks"}
            </p>
          </div>
          <div className=" flex flex-col items-center w-[20vh]">
            <div className="h-[15vh] w-[15vh] relative flex flex-col items-center justify-center">
              <div className="w-full h-full animate-rotate absolute">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/vitamins_curved.png"}
                  layout="fill"
                />
              </div>
              <div className=" w-[10vh] h-[10vh] relative">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/logo_vitamins.png"}
                  layout="fill"
                />
              </div>
            </div>
            <p className=" text-[#181818] text-base mt-2 font-semibold">
              Essential Nutrients
            </p>
            <p className=" text-[#181818]/80 text-xs text-center ">
              {"Packed with vitamins, salts, and electrolytes."}
            </p>
          </div>
          <div className=" flex flex-col items-center w-[20vh]">
            <div className="h-[15vh] w-[15vh] relative flex flex-col items-center justify-center">
              <div className="w-full h-full animate-rotate absolute">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_API_URL + "/zerosugar_curved.png"
                  }
                  layout="fill"
                />
              </div>
              <div className=" w-[10vh] h-[10vh] relative">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/logo_sugar.png"}
                  layout="fill"
                />
              </div>
            </div>
            <p className=" text-[#181818] text-base mt-2 font-semibold">
              Caffeine-Free
            </p>
            <p className=" text-[#181818]/80 text-xs text-center ">
              {"Pure hydration without the jitters."}
            </p>
          </div>
        </div>
        <RevealOnScroll
          threshold={0.3}
          addedClasses=" flex flex-col items-center w-full mt-[10vh]"
        >
          <h2 className=" text-base animate-slideUp text-[#408289]">
            {"Let's make waves with Hydroshark!"}
          </h2>
          <p className=" text-4xl text-[#181818]">{"Explore our products"}</p>
          <div className=" flex w-full h-full flex-row justify-center mt-[5vh] mb-[10vh] items-center">
            <div className=" flex flex-row justify-between w-[45%] h-[60vh] relative overflow-hidden">
              <div class="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#c7c7c712_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>

              <div className=" flex w-1/2 h-full bg-[#102914] flex-col items-start px-4 justify-center">
                <h2 className=" text-3xl text-[#dee2e6]">{"Lemon"}</h2>
                <p className=" text-[#dee2e6]/80 text-base mt-4">
                  {
                    "Hydroshark Mango offers more than just great taste; it provides a powerful blend of vitamins, minerals, and electrolytes designed for ultimate hydration and energy. Embrace the vibrant, fruity experience that not only quenches your thirst but also lifts your spirits and boosts your vitality."
                  }
                </p>
              </div>
              <div className=" relative h-full w-1/2  ">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/lemoncan.png"}
                  layout="fill"
                />
              </div>
            </div>
            <div className=" flex flex-row-reverse justify-between w-[45%] h-[60vh] relative overflow-hidden">
              <div class="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#c7c7c730_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>

              <div className=" flex w-1/2 h-full bg-[#dfd434] flex-col items-start px-4 justify-center">
                <h2 className=" text-3xl text-[#181818]">{"Mango"}</h2>
                <p className=" text-[#181818]/80 text-base mt-4">
                  {
                    "Hydroshark Mango offers more than just great taste; it provides a powerful blend of vitamins, minerals, and electrolytes designed for ultimate hydration and energy. Embrace the vibrant, fruity experience that not only quenches your thirst but also lifts your spirits and boosts your vitality."
                  }
                </p>
              </div>
              <div className=" relative h-full w-1/2  ">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/mangocan.png"}
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Explore;
