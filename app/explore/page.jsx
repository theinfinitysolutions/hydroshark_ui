"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { useMotionValue, animate } from "framer-motion";

const FAST_DURATION = 50;
const SLOW_DURATION = 120;

const Explore = () => {
  let [ref, { width }] = useMeasure();
  const [duration, setDuration] = useState(FAST_DURATION);
  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <div className="w-full min-h-screen relative bg-[#f0f2f4] flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className=" flex flex-col items-center w-11/12 z-20 ">
        <div className=" flex flex-col items-center w-full mt-[10vh]">
          <h2 className=" text-base text-[#408289]">{"Discover Hydroshark"}</h2>
          <p className=" text-[2rem] text-center font-bold text-[#181818]">
            {"India's First Carbonated Hydration Drink"}
          </p>
          <p className=" text-base text-[#181818] text-center px-1 md:px-[10vw] mt-2">
            {
              "At Hydroshark, we saw a glaring gap in the market—there were no tasty, low-sugar hydration drinks available. Most options were unhealthy energy drinks, notorious for their potential risks like ruptured intestines and heart issues. That’s why we created Hydroshark, India’s first carbonated hydration drink."
            }
          </p>
        </div>
        <div className="flex flex-row justify-between w-full lg:w-7/12 mt-[7.5vh] px-2 lg:px-8">
          <div className=" flex flex-col items-center w-[30%] lg:w-[20vh]">
            <div className="w-[25vw] h-[25vw] lg:w-[15vh] lg:h-[15vh] relative flex flex-col items-center justify-center">
              <div className="w-[25vw] h-[25vw] lg:w-[15vh] lg:h-[15vh] animate-rotate absolute">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/caffeine_curved.png"}
                  fill
                  alt="caffeine_curved"
                />
              </div>
              <div className=" w-[10vh] h-[10vh] relative">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/logo_caffeine.png"}
                  fill
                  alt="logo_caffeine"
                />
              </div>
            </div>
            <p className=" text-[#181818] text-center text-sm lg:text-base mt-2 font-semibold">
              Caffeine-Free
            </p>
            <p className=" text-[#181818]/80 text-xs text-center ">
              {"Pure hydration without the jitters."}
            </p>
          </div>
          <div className=" flex flex-col items-center w-[30%] lg:w-[20vh]">
            <div className="w-[25vw] h-[25vw] lg:w-[15vh] lg:h-[15vh] relative flex flex-col items-center justify-center">
              <div className="w-[25vw] h-[25vw] lg:w-[15vh] lg:h-[15vh] animate-rotate absolute">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/vitamins_curved.png"}
                  fill
                  alt="vitamins_curved"
                />
              </div>
              <div className=" w-[10vh] h-[10vh] relative">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/logo_vitamins.png"}
                  fill
                  alt="logo_vitamins"
                />
              </div>
            </div>
            <p className=" text-[#181818] text-center text-sm lg:text-base mt-2 font-semibold">
              Essential Nutrients
            </p>
            <p className=" text-[#181818]/80 text-xs text-center ">
              {"Packed with vitamins, salts, and electrolytes."}
            </p>
          </div>
          <div className=" flex flex-col items-center w-[30%] lg:w-[20vh]">
            <div className="w-[25vw] h-[25vw] lg:w-[15vh] lg:h-[15vh] relative flex flex-col items-center justify-center">
              <div className="w-[25vw] h-[25vw] lg:w-[15vh] lg:h-[15vh] animate-rotate absolute">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_API_URL + "/zerosugar_curved.png"
                  }
                  fill
                  alt="zerosugar_curved"
                />
              </div>
              <div className=" w-[10vh] h-[10vh] relative">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/logo_sugar.png"}
                  fill
                  alt="logo_sugar"
                />
              </div>
            </div>

            <p className=" text-[#181818] text-center text-sm lg:text-base mt-2 font-semibold">
              Low-Sugar
            </p>
            <p className=" text-[#181818]/80 text-xs text-center ">
              {"Enjoy a tasty drink without the health risks"}
            </p>
          </div>
        </div>
        <div className=" my-[5vh]">
          <motion.div
            className="h-[40vh] lg:h-[50vh] mt-[5vh] left-0 flex gap-4"
            style={{ x: xTranslation }}
            ref={ref}
            onHoverStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onHoverEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }}
          >
            {Array(20)
              .fill(1)
              .map((item, idx) => (
                <motion.div
                  key={idx}
                  className=" w-[40vh] h-[40vh] lg:w-[70vh] lg:h-[50vh] relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_API_URL +
                      `/img${(idx % 6) + 4}.webp`
                    }
                    fill
                    alt={`gallery${idx}`}
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
              ))}
          </motion.div>
        </div>
        <RevealOnScroll
          threshold={0.3}
          addedClasses=" flex flex-col items-center w-full mt-[10vh]"
        >
          <h2 className=" text-base text-[#408289]">
            {"Let's make waves with Hydroshark!"}
          </h2>
          <p className=" text-4xl text-[#181818]">{"Explore our products"}</p>
          <div className=" flex w-full h-full flex-col lg:flex-row justify-center mt-[5vh] mb-[10vh] items-center">
            <div className=" flex flex-row justify-between w-full lg:w-[45%] h-[50vh] lg:h-[60vh] relative overflow-hidden">
              <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#c7c7c712_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>

              <div className=" flex w-1/2 h-full bg-[#102914] flex-col items-start px-4 justify-center">
                <h2 className=" text-2xl lg:text-3xl text-[#dee2e6]">
                  {"Lemon"}
                </h2>
                <p className=" text-[#dee2e6]/80 text-sm lg:text-base mt-4">
                  {
                    "With Hydroshark Lemon, experience the invigorating burst of citrus that not only quenches your thirst but also revitalizes your mind and body. Enjoy the crisp, clean taste that hydrates you with essential vitamins, minerals, and electrolytes, ensuring you stay at your best all day long."
                  }
                </p>
              </div>
              <div className=" relative h-full w-1/2  ">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/lemoncan.webp"}
                  fill
                  style={{ objectFit: "contain" }}
                  alt="hydrodshark lemon can"
                />
              </div>
            </div>
            <div className=" flex flex-row-reverse justify-between w-full lg:w-[45%] h-[50vh] lg:h-[60vh] relative overflow-hidden">
              <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#c7c7c730_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>

              <div className=" flex w-1/2 h-full bg-[#dfd434] flex-col items-start px-4 justify-center">
                <h2 className=" text-2xl lg:text-3xl text-[#181818]">
                  {"Mango"}
                </h2>
                <p className=" text-[#181818]/80 text-sm lg:text-base mt-4">
                  {
                    "Hydroshark Mango offers more than just great taste; it provides a powerful blend of vitamins, minerals, and electrolytes designed for ultimate hydration and energy. Embrace the vibrant, fruity experience that not only quenches your thirst but also lifts your spirits and boosts your vitality."
                  }
                </p>
              </div>
              <div className=" relative h-full w-1/2  ">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/mangocan.webp"}
                  fill
                  style={{ objectFit: "contain" }}
                  alt="hydrodshark mango can"
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
