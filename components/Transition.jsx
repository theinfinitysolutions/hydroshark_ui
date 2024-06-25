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
            className=" h-[45vw] w-[45vw] lg:h-[75vh] lg:w-[75vh] bg-black rounded-full  z-50 absolute top-[12.5vh] -right-[22.5vw] lg:-right-[37.5vh]"
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
            className=" w-[37.5vw] h-[37.5vw]  lg:h-[60vh] lg:w-[60vh] bg-white rounded-full  z-50 absolute top-[20vh] -right-[18.75vw]  lg:-right-[30vh]"
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
            className=" w-[20vw] h-[20vw] lg:h-[45vh] lg:w-[45vh] rounded-full bg-black z-50 absolute top-[27.5vh] -right-[10vw]  lg:-right-[22.5vh]"
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
            className=" h-[15vw] w-[15vw]  lg:h-[30vh] lg:w-[30vh] z-50 absolute top-[35vh] -right-[7.5vw] lg:-right-[15vh]"
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
            className="h-[40vw] w-[40vw] lg:h-[75vh] lg:w-[75vh] bg-black rounded-full  z-50 absolute top-[12.5vh] -left-[37.5vh]"
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
            className="w-[30vw] h-[30vw]  lg:h-[60vh] lg:w-[60vh] bg-white rounded-full z-50 absolute top-[20vh] -left-[30vh]"
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
            className=" w-[20vw] h-[20vw]  lg:h-[45vh] lg:w-[45vh] rounded-full bg-black z-50 absolute top-[27.5vh] -left-[22.5vh]"
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
            className="h-[30vh] w-[30vh] z-50 absolute top-[35vh] -left-[15vh]"
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
