"use client";
import React, { useRef } from "react";
import { Caveat } from "next/font/google";
import ParallaxScroll from "./ParallaxScroll";
import Image from "next/image";
import { FAQ } from "@/utils/consts";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

const HomeSection3 = () => {
  const targetRef = useRef(null);
  const [currentQuestion, setCurrentQuestion] = React.useState(null);

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
              {"Low calorie"}
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
            <span className="text-sm p-[0_2vw] text-white">{"Salt"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">{"Low sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">
              {"Low calorie"}
            </span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">
              {"Electrolytes"}
            </span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">{"Salt"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">{"Low sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>

            <span className="text-sm p-[0_2vw] text-white">{"Vitamins"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-sm p-[0_2vw] text-white">
              {"Low calorie"}
            </span>
          </div>
        </div>
        <p className=" text-xl w-full lg:text-3xl text-[#3997a1] italic mt-[5vh] lg:mt-[10vh]">
          {"Experience the Hydroshark Difference "}
        </p>
        <div className="w-full flex flex-col items-start">
          <h3 className=" text-[5rem] text-black font-bold">
            {"SEE WHAT'S INSIDE"}
          </h3>
          <div className="w-10/12 flex flex-col items-start mt-8">
            {FAQ.map((question, index) => {
              return (
                <a
                  onClick={() =>
                    setCurrentQuestion(currentQuestion == index ? -1 : index)
                  }
                  key={index}
                  className="flex cursor-pointer transition-all duration-200 bg-gradient-to-r from-[#1b1f20] to-[#414549]  px-4 py-4 rounded-md  flex-col mb-4 items-start w-full "
                >
                  <div className="flex flex-row w-full justify-between items-center">
                    <h3 className="text-xl font-semibold text-white ">
                      {question.question}
                    </h3>
                    {currentQuestion === index ? (
                      <MdKeyboardArrowUp
                        className="text-3xl text-white  cursor-pointer"
                        onClick={() => setCurrentQuestion(null)}
                      />
                    ) : (
                      <MdKeyboardArrowDown
                        className="text-3xl text-white cursor-pointer"
                        onClick={() => setCurrentQuestion(index)}
                      />
                    )}
                  </div>
                  {currentQuestion === index ? (
                    <p className="text-md text-white mt-4 animate-slideDown">
                      {question.answer}
                    </p>
                  ) : null}
                </a>
              );
            })}
          </div>
        </div>

        <div className=" h-[15vw] w-[15vw] lg:h-[7.5vh] lg:w-[7.5vh] mt-4 animate-rotate absolute right-8 bottom-8 lg:right-[2.5vh] lg:bottom-[2.5vh]">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/hydroshark.png"}
            layout="fill"
            alt="hydroshark img"
          />
        </div>
        <div className=" absolute bottom-0 right-0 w-[50vw] h-[50vw] lg:h-[25vh] lg:w-[25vh]">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/curvedCans.png"}
            objectFit="cover"
            layout="fill"
            alt="hydroshark img"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
