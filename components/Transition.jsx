"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  LandingSceneLemon,
  LandingSceneMango,
  CanSceneTransition,
  CanTransitionMango,
  CanSceneTransitionRight,
  CanSceneTransitionLeft,
} from "./CanModel";
import MarqeeLanding from "./MarqeeLanding";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Transition = ({ children }) => {
  const [showContent, setShowContent] = useState(false);
  const [currentColor, setCurrentColor] = useState("#000000");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor(getRandomColor());
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 6000);
  }, []);

  return (
    <main className="min-h-screen max-w-screen w-[100vw] bg-transparent relative flex">
      {children}
      <motion.div
        style={{ zIndex: showContent ? -1 : 50 }}
        className={`slide-in w-full bg-transparent  h-full ${
          showContent ? "hidden" : "fixed"
        } fixed top-0 flex flex-row justify-between left-0 z-50`}
      >
        <motion.div
          animate={{
            x: ["0vw", "0vw", "0vw", "-50vw"],
          }}
          transition={{
            duration: 6,
            times: [0, 0.1, 0.6, 1],
          }}
          className=" w-1/2 h-screen bg-[#f1f3f5] relative overflow-hidden"
        >
          <motion.div
            initial={{
              transform: "rotate(360deg)",
            }}
            animate={{
              transform: "rotate(0deg)",
            }}
            transition={{
              duration: 3.5,
              times: [0, 0.1, 0.1, 1],
            }}
            className=" h-[40vh] w-[40vh] lg:h-[75vh] lg:w-[75vh] bg-black rounded-full  z-50 absolute top-[30vh] lg:top-[12.5vh] -right-[20vh] lg:-right-[37.5vh]"
          >
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/loading.png"}
              layout="fill"
            />
          </motion.div>
          <motion.div
            initial={{
              transform: "rotate(0deg)",
            }}
            animate={{
              transform: "rotate(360deg)",
            }}
            transition={{
              duration: 3,
              times: [0, 0.1, 0.1, 1],
            }}
            className=" w-[30vh] h-[30vh]  lg:h-[60vh] lg:w-[60vh] bg-white rounded-full  z-50 absolute top-[35vh] -right-[15vh] lg:top-[20vh]  lg:-right-[30vh]"
          >
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/loading1.png"}
              layout="fill"
            />
          </motion.div>
          <motion.div
            initial={{
              transform: "rotate(360deg)",
            }}
            animate={{
              transform: "rotate(0deg)",
            }}
            transition={{
              duration: 2.75,
              times: [0, 0.1, 0.1, 1],
            }}
            className=" w-[22.5vh] h-[22.5vh] lg:h-[45vh] lg:w-[45vh] rounded-full bg-black z-50 absolute top-[38.75vh] lg:top-[27.5vh] -right-[11.25vh]  lg:-right-[22.5vh]"
          >
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/loading.png"}
              layout="fill"
            />
          </motion.div>

          <motion.div
            initial={{
              transform: "rotate(0deg)",
            }}
            animate={{
              transform: "rotate(360deg)",
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.1, 0.1, 1],
            }}
            className=" h-[17.5vh] w-[17.5vh]  lg:h-[30vh] lg:w-[30vh] z-50 absolute top-[41.25vh] lg:top-[35vh] -right-[8.75vh] lg:-right-[15vh]"
          >
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/hydroshark_logo.png"}
              layout="fill"
            />
          </motion.div>
        </motion.div>
        <motion.div
          animate={{
            x: ["0vw", "0vw", "0vw", "50vw"],
          }}
          transition={{
            duration: 6,
            times: [0, 0.1, 0.6, 1],
          }}
          initial
          className=" w-1/2 h-screen bg-[#f1f3f5] relative overflow-hidden"
        >
          <motion.div
            initial={{
              transform: "rotate(360deg)",
            }}
            animate={{
              transform: "rotate(0deg)",
            }}
            transition={{
              duration: 3.5,
              times: [0, 0.1, 0.1, 1],
            }}
            className="h-[40vh] w-[40vh] lg:h-[75vh] lg:w-[75vh] bg-black rounded-full  z-50 absolute top-[30vh] lg:top-[12.5vh] -left-[20vh] lg:-left-[37.5vh]"
          >
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/loading.png"}
              layout="fill"
            />
          </motion.div>
          <motion.div
            initial={{
              transform: "rotate(0deg)",
            }}
            animate={{
              transform: "rotate(360deg)",
            }}
            transition={{
              duration: 3,
              times: [0, 0.1, 0.1, 1],
            }}
            className="w-[30vh] h-[30vh]  lg:h-[60vh] lg:w-[60vh] bg-white rounded-full  z-50 absolute top-[35vh] lg:top-[20vh] -left-[15vh]  lg:-left-[30vh]"
          >
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/loading1.png"}
              layout="fill"
            />
          </motion.div>
          <motion.div
            initial={{
              transform: "rotate(360deg)",
            }}
            animate={{
              transform: "rotate(0deg)",
            }}
            transition={{
              duration: 2.75,
              times: [0, 0.1, 0.1, 1],
            }}
            className=" w-[22.5vh] h-[22.5vh] lg:h-[45vh] lg:w-[45vh] rounded-full bg-black z-50 absolute top-[38.75vh] lg:top-[27.5vh] -left-[11.25vh]  lg:-left-[22.5vh]"
          >
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/loading.png"}
              layout="fill"
            />
          </motion.div>
          <motion.div
            initial={{
              transform: "rotate(0deg)",
            }}
            animate={{
              transform: "rotate(360deg)",
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.1, 0.1, 1],
            }}
            className="h-[17.5vh] w-[17.5vh]  lg:h-[30vh] lg:w-[30vh] z-50 absolute top-[41.25vh] lg:top-[35vh] -left-[8.75vh] lg:-left-[15vh]"
          >
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/hydroshark_logo.png"}
              layout="fill"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Transition;

{
  /* <motion.div
            initial={{ y: "50vh" }}
            animate={{ y: "5vh", opacity: [0, 1, 1] }}
            className="z-20 mt-[10vh] h-[70vh] w-[50vw] absolute left-0"
            transition={{ duration: 2.5, delay: 0.5, times: [0, 0.3, 1] }}
          >
            <div className="w-full h-full">
              <CanSceneTransitionRight />
            </div>
          </motion.div> */
}

{
  /* <motion.div
            initial={{ y: "50vh" }}
            animate={{ y: "5vh", opacity: [0, 1, 1] }}
            className="z-20 mt-[10vh] h-[70vh] w-[50vw] absolute right-0"
            transition={{ duration: 2.5, delay: 0.5, times: [0, 0.3, 1] }}
          >
            <div className="w-full h-full">
              <CanSceneTransitionLeft />
            </div>
          </motion.div> */
}
