"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Transition from "@/components/Transition";
import { motion } from "framer-motion";
import { LandingSceneLemon, ReplaceScene } from "@/components/CanModel";
import { flavorData } from "@/utils/consts";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import BackgroundRipple from "@/components/BackgroundRipple";
import HomeSection3 from "@/components/HomeSection3";
import ProductSectionHome from "@/components/ProductSectionHome";
import ShopNowButton from "@/components/ShopNow";
import ProductSectionHome1 from "@/components/ProductSectionHome1";

export default function Home() {
  const ref = useRef();
  const [currentFlavour, setCurrentFlavour] = useState(0);
  const [animateHeight, setAnimateHeight] = useState("50vh");

  useEffect(() => {
    if (window.innerWidth < 360) {
      setAnimateHeight("60vh");
    }
  }, []);

  return (
    // <Transition>
    <div
      ref={ref}
      className="flex min-h-screen bg-[#f0f2f4]  w-[100vw] z-20 flex-col overflow-hidden relative items-center "
    >
      <div className=" h-[10vw] w-[10vw] lg:h-[8vh] lg:w-[8vh] absolute right-[80vw] lg:right-[10vw] top-[45vh] lg:top-[50vh] animate-rotate -mt-2 ">
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + "/asset5.png"}
          alt="asset5"
          layout="fill"
        />
      </div>

      <div className="absolute overflow-hidden [--offset:40vw] bg-black rotate-[7deg] lg:rotate-[4deg] top-[75vh] z-40 [--move-initial:calc(-20%+_var(--offset))] [--move-final:calc(-40%_+_var(--offset))] ">
        <div
          className="min-w-screen w-[150vw] flex flex-row  lg:py-1 items-center relative  transform-[translate3d(var(--move-initial),0,0)] animate-marqueebanner [animation-play-state:running]"
          aria-hidden="true"
        >
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className=" text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Low calorie"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Low sugar"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Electrolytes"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Vitamins"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Salt"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className=" text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Low calorie"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className=" hidden lg:block text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Low sugar"}
          </span>
          <span className="hidden lg:block h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="hidden lg:block text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Electrolytes"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Vitamins"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Salt"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>

          <span className=" hidden lg:block text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Low calorie"}
          </span>
          <span className=" hidden lg:block h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className=" hidden lg:block text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Low sugar"}
          </span>
          <span className="hidden lg:block h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="hidden lg:block text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Electrolytes"}
          </span>
          <span className="hidden lg:block h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="hidden lg:block text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Vitamins"}
          </span>
          <span className="hidden lg:block h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="hidden lg:block text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Salt"}
          </span>
        </div>
      </div>
      <div className="absolute overflow-hidden [--offset:40vw] bg-black rotate-[-7deg] lg:rotate-[-4deg] top-[75vh] z-40 [--move-initial:calc(-10%+_var(--offset))] [--move-final:calc(-25%_+_var(--offset))] ">
        <div
          className="min-w-screen w-[150vw] flex flex-row  lg:py-1 items-center relative  transform-[translate3d(var(--move-initial),0,0)] animate-marqueebanner [animation-play-state:running]"
          aria-hidden="true"
        >
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className=" text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Low calorie"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Low sugar"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Electrolytes"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Vitamins"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Salt"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className=" text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Low calorie"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className=" hidden lg:block text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Low sugar"}
          </span>
          <span className="hidden lg:block h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="hidden lg:block text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Electrolytes"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Vitamins"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Salt"}
          </span>
          <span className="h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className=" hidden lg:block text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Low sugar"}
          </span>
          <span className="hidden lg:block h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="hidden lg:block text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Electrolytes"}
          </span>
          <span className="hidden lg:block h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="hidden lg:block text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Vitamins"}
          </span>
          <span className="hidden lg:block h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-white"></span>
          <span className="hidden lg:block text-[8px] lg:text-[12px] p-[1vw_2vw] lg:p-[0_2vw] text-white">
            {"Salt"}
          </span>
        </div>
      </div>

      {/* <div className=" hidden lg:block absolute left-[25vw] z-50 h-[60vh] w-[50vw] ">
        <motion.div
          initial={{ y: "70vh" }}
          animate={{ y: "30vh", opacity: [0, 1, 1] }}
          className="z-20 w-full h-full"
          transition={{ duration: 2.5, delay: 3.5, times: [0, 0.3, 1] }}
        >
          <LandingSceneLemon orbital={true} />
        </motion.div>
      </div>

      <div
        disabled
        className=" block lg:hidden absolute left-0 z-50  h-[35vh] w-[60vw]  pointer-events-none"
      >
        <motion.div
          initial={{ y: "90vh" }}
          animate={{ y: animateHeight, opacity: [0, 1, 1] }}
          className="z-20 w-full h-full"
          transition={{ duration: 2.5, delay: 3.5, times: [0, 0.3, 1] }}
        >
          <LandingSceneLemon orbital={false} />
        </motion.div>
      </div> */}

      <div className="fixed left-0 top-[5vh] -z-10">
        <p className=" text-[5rem] lg:text-[14rem] text-black/5 leading-[5rem] lg:leading-[13rem]">
          HYDROSHARK
        </p>
        <p className=" text-[5rem] lg:text-[14rem] text-black/5 leading-[5rem] lg:leading-[13rem]">
          HYDROSHARK
        </p>
        <p className=" text-[5rem] lg:text-[14rem] text-black/5 leading-[5rem] lg:leading-[13rem]">
          HYDROSHARK
        </p>
        <p className=" text-[5rem] lg:text-[14rem] text-black/5 leading-[5rem] lg:leading-[13rem]">
          HYDROSHARK
        </p>
        <p className=" block lg:hidden text-[5rem] lg:text-[14rem] text-black/5 leading-[5rem] lg:leading-[13rem]">
          HYDROSHARK
        </p>
        <p className="  block lg:hidden text-[5rem] lg:text-[14rem] text-black/5 leading-[5rem] lg:leading-[13rem]">
          HYDROSHARK
        </p>
        <p className="  block lg:hidden text-[5rem] lg:text-[14rem] text-black/5 leading-[5rem] lg:leading-[13rem]">
          HYDROSHARK
        </p>
        <p className="  block lg:hidden text-[5rem] lg:text-[14rem] text-black/5 leading-[5rem] lg:leading-[13rem]">
          HYDROSHARK
        </p>
        <p className="  block lg:hidden text-[5rem] lg:text-[14rem] text-black/5 leading-[5rem] lg:leading-[13rem]">
          HYDROSHARK
        </p>
        <p className="  block lg:hidden text-[5rem] lg:text-[14rem] text-black/5 leading-[5rem] lg:leading-[13rem]">
          HYDROSHARK
        </p>
        <p className="  block lg:hidden text-[5rem] lg:text-[14rem] text-black/5 leading-[5rem] lg:leading-[13rem]">
          HYDROSHARK
        </p>{" "}
        <p className="  block lg:hidden text-[5rem] lg:text-[14rem] text-black/5 leading-[5rem] lg:leading-[13rem]">
          HYDROSHARK
        </p>
      </div>

      <div className="flex flex-col lg:flex-row h-[90vh] w-full px-[5vw] overflow-hidden pt-[5vh] relative ">
        <div className="flex flex-col w-full lg:w-1/2 items-start">
          <h1 className=" text-black text-[2.5rem]  lg:text-[4rem] 2xl:text-[5rem] font-bold leading-[2.5rem] lg:leading-[4rem] 2xl:leading-[5rem]">
            {"India's First Carbonated Hydration Drink"}
          </h1>
          <div className=" hidden  w-7/12 lg:flex flex-col mt-[5vh]">
            <div className="flex flex-row justify-between items-center">
              <p className=" text-black text-base">Energy</p>
              <div className="w-9/12 border-[1px] border-[#181818] h-[1vh] rounded-full">
                <div className="w-12/12 bg-black h-full rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className=" text-black text-base">Hydration</p>
              <div className="w-9/12 border-[1px] border-[#181818] h-[1vh] rounded-full">
                <div className="w-11/12 bg-black h-full rounded-full"></div>
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
        <div className="flex flex-col items-start lg:items-end mt-4 lg:mt-0 w-full lg:w-1/2 ">
          <div className="flex flex-row justify-between w-full lg:w-9/12 px-4 lg:px-8">
            <div className="w-[22.5vw] h-[22.5vw] lg:w-[15vh] lg:h-[15vh] relative flex flex-col items-center justify-center">
              <div className="w-[22.5vw] h-[22.5vw] lg:w-[15vh] lg:h-[15vh] animate-rotate absolute">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/caffeine_curved.png"}
                  alt="caffeine_curved"
                  layout="fill"
                />
              </div>
              <div className=" w-[15vw] h-[15vw] lg:w-[10vh] lg:h-[10vh] relative">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/logo_caffeine.png"}
                  alt="logo_caffeine"
                  layout="fill"
                />
              </div>
            </div>
            <div className="w-[22.5vw] h-[22.5vw] lg:w-[15vh] lg:h-[15vh] relative flex flex-col items-center justify-center">
              <div className="w-[22.5vw] h-[22.5vw] lg:w-[15vh] lg:h-[15vh] animate-rotate absolute">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/vitamins_curved.png"}
                  alt="vitamins_curved"
                  layout="fill"
                />
              </div>
              <div className="  w-[15vw] h-[15vw] lg:w-[10vh] lg:h-[10vh] relative">
                <Image
                  alt="logo_vitamins"
                  src={process.env.NEXT_PUBLIC_API_URL + "/logo_vitamins.png"}
                  layout="fill"
                />
              </div>
            </div>
            <div className="w-[22.5vw] h-[22.5vw] lg:w-[15vh] lg:h-[15vh] relative flex flex-col items-center justify-center">
              <div className="w-[22.5vw] h-[22.5vw] lg:w-[15vh] lg:h-[15vh] animate-rotate absolute">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_API_URL + "/zerosugar_curved.png"
                  }
                  layout="fill"
                  alt="zerosugar_curved"
                />
              </div>
              <div className=" w-[15vw] h-[15vw] lg:w-[10vh] lg:h-[10vh] relative">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/logo_sugar.png"}
                  layout="fill"
                  alt="logo_sugar"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-end mt-4 lg:mt-[5vh]">
            <p className=" text-black text-xl font-semibold text-end">
              Why choose Hydroshark?
            </p>
            <p className="text-black/80 mt-1 w-10/12 lg:w-7/12 text-[0.75rem] text-end leading-[1rem]">
              {
                "Join us on our mission to change the way India hydrates. Let’s make every sip a step towards a healthier, more adventurous life."
              }
              <span> hydrated</span> {"and energized throughout the day"}
            </p>
            {/* <button class="group relative mt-8">
                <div class="relative z-10 inline-flex h-10 pt-[2px] items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white px-6 font-medium text-neutral-600 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0">
                  SHOP NOW
                </div>
                <div class="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"></div>
              </button> */}

            <div className="mt-4">
              <ShopNowButton />
            </div>
          </div>
        </div>
      </div>

      <RevealOnScroll
        threshold={0.2}
        addedClasses="flex flex-row justify-between items-center lg:h-screen z-20 w-[100vw] px-[5vw] relative overflow-hidden "
      >
        <div className=" h-[8vw] w-[8vw]  lg:h-[8vh] lg:w-[8vh] absolute right-[20vw] top-[10vh] animate-rotate -mt-2 ">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/asset5.png"}
            layout="fill"
            alt="asset5"
          />
        </div>
        <div className=" h-[8vw] w-[8vw] lg:h-[8vh] lg:w-[8vh] absolute left-[10vw] top-[50vh] animate-rotate -mt-2 ">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/asset5.png"}
            layout="fill"
            alt="asset5"
          />
        </div>
        <div className=" h-[8vw] w-[8vw] lg:h-[8vh] lg:w-[8vh] absolute right-[30vw] top-[80vh] animate-rotate -mt-2 ">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/asset5.png"}
            layout="fill"
            alt="asset5"
          />
        </div>
        <div className=" absolute right-0 -z-10 bottom-0">
          <BackgroundRipple
            currentColor={
              flavorData[currentFlavour].id == 1 ? "#308918" : "#dfd434"
            }
          />
        </div>
        <div className=" absolute left-0 -z-10 top-0">
          <BackgroundRipple
            currentColor={
              flavorData[currentFlavour].id == 1 ? "#308918" : "#dfd434"
            }
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-center mt-[10vh] w-full items-center">
          <div className="flex flex-col items-center lg:items-end w-full lg:w-1/3">
            <p className=" text-xs text-[#5C6262]">DISCOVER OUR DRINKS</p>
            <h2
              className={` text-[4rem] font-semibold ${
                flavorData[currentFlavour].id == 1
                  ? "text-[#308918]"
                  : "text-[#dfd434]"
              } `}
            >
              {flavorData[currentFlavour].title}
            </h2>
            <div className="flex flex-col items-end">
              <p className=" text-xs text-cyan-600">Quantity</p>
              <p className=" text-base text-black">
                {flavorData[currentFlavour].quanity}
              </p>
            </div>
            <div className=" hidden lg:flex flex-col items-end mt-[10vh]">
              <p className=" text-xs text-cyan-600">Ingredients</p>
              <p className=" text-base text-end text-black">
                {flavorData[currentFlavour].ingredients}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-8 lg:mt-0 w-full lg:w-1/3 px-[5vw]">
            <div className=" border-[1px] border-[#5C6262] border-dashed z-0 w-full h-[60vh] p-2 flex flex-col rounded-[2rem] items-center justify-center">
              {/* <div className=" flex lg:hidden w-full h-full relative border-[1px] border-[#5C6262]/40 rounded-[3rem] pointer-events-none  ">
                <ReplaceScene
                  scene={flavorData[currentFlavour].id == 1 ? "lemon" : "mango"}
                  orbital={false}
                />
              </div>
              <div className=" hidden lg:flex w-full h-full relative border-[1px] border-[#5C6262]/40 rounded-[3rem] pointer-events-none  ">
                <ReplaceScene
                  scene={flavorData[currentFlavour].id == 1 ? "lemon" : "mango"}
                  orbital={true}
                />
              </div> */}
            </div>
            <div className="flex flex-row justify-center mt-4 z-20 items-center gap-x-4">
              <button
                onClick={() => {
                  setCurrentFlavour((currentFlavour - 1) % 2);
                }}
                className=" p-2 cursor-pointer rounded-full border-[0.5px] border-[#5C6262]"
              >
                <FaArrowLeft className="text-[#5C6262]" />
              </button>
              <p
                className={` text-[1rem] font-semibold ${
                  flavorData[currentFlavour].id == 1
                    ? "text-[#308918]"
                    : "text-[#dfd434]"
                } `}
              >
                {flavorData[currentFlavour].title}
              </p>
              <button
                onClick={() => {
                  setCurrentFlavour((currentFlavour + 1) % 2);
                }}
                className=" p-2 cursor-pointer rounded-full border-[0.5px] border-[#5C6262]"
              >
                <FaArrowRight className="text-[#5C6262]" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start w-full mt-8 lg:mt-0 lg:w-1/3">
            <p className=" text-xs text-[#5C6262]">
              EXPERIENCE HYDRATION WITH OUR{" "}
              <span
                className={` font-semibold ${
                  flavorData[currentFlavour].id == 1
                    ? "text-[#308918]"
                    : "text-[#dfd434]"
                } `}
              >
                {flavorData[currentFlavour].title}
              </span>{" "}
              FlAVOUR
            </p>
            <p className=" text-black text-center lg:text-start text-xl">
              {flavorData[currentFlavour].description}
            </p>

            {/* <button className=" flex flex-col items-center transition-all duration-200 mt-4 px-6 border-[1px] border-black py-2 bg-transparent text-black hover:bg-black hover:text-white">
                <p className=" mt-1">ADD TO CART</p>
              </button> */}

            <div className="mt-4">
              <ShopNowButton />
            </div>

            <div className="flex flex-col w-9/12 items-start border-y-[1px] border-dashed border-[#5C6262] my-[5vh] lg:mt-[5vh] py-2">
              <div className="flex flex-row w-full justify-between items-center border-b-[0.5px] border-[#5C6262]">
                <div className=" flex flex-col w-1/2 items-center justify-center p-6 border-r-[1px] border-[#5C6262]">
                  <p className=" text-xs text-cyan-600">Temperature</p>
                  <p className="  text-lg lg:text-xl text-black">{"15-20°C"}</p>
                </div>
                <div className=" flex flex-col w-1/2  items-center justify-center p-6">
                  <p className=" text-xs text-cyan-600">Calories</p>
                  <p className=" text-lg lg:text-xl text-black">{"99 Kcal"}</p>
                </div>
              </div>
              <div className="flex flex-row w-full justify-between items-center ">
                <div className=" flex flex-col w-1/2  items-center justify-center p-6 border-r-[1px] border-[#5C6262]">
                  <p className=" text-xs text-cyan-600">Caffeine</p>
                  <p className="  text-lg lg:text-xl text-black">{"0 mg"}</p>
                </div>
                <div className=" flex flex-col w-1/2  items-center justify-center p-6">
                  <p className=" text-xs text-cyan-600">Vitamins</p>
                  <p className="  text-lg lg:text-xl text-black">
                    {"B - 2,6,12"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <ProductSectionHome1 />
      <HomeSection3 />
    </div>
    // </Transition>
  );
}
