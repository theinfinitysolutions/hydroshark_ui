"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  LandingSceneLemon,
  LandingSceneMango,
  CanSceneTransition,
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
    }, 2000);
  }, []);

  return (
    <main className="min-h-screen w-screen bg-transparent flex">
      {showContent ? children : <div></div>}

      <motion.div
        style={{ background: "#181818" }}
        className={`slide-in w-full h-full fixed top-0 left-0 z-50`}
        animate={{
          y: ["0vh", "0vh", "0vh", "100vh"],
        }}
        transition={{
          duration: 6,
          times: [0, 0.3, 0.8, 1],
          ease: [0.6, 1, 0.2, 1],
        }}
      >
        <MarqeeLanding textColor={currentColor} />

        <motion.div
          initial={{ x: "-20vw" }}
          animate={{ x: "55vw", opacity: [0, 1, 1] }}
          className="z-20 mt-[10vh] h-[70vh] w-[40vw]"
          transition={{ duration: 2.5, delay: 0.5, times: [0, 0.3, 1] }}
        >
          <div className=" h-[70vh] w-[40vw] ">
            <CanSceneTransition />
          </div>
        </motion.div>

        <div className="h-[30vw] w-[30vw] z-0 absolute left-[5vw] top-[20vh]">
          <Image src={"/hydroshark_logo.png"} layout="fill" />
        </div>
      </motion.div>
    </main>
  );
};

export default Transition;
