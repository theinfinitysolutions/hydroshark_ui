"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import ContactUs from "@/components/ContactUs";

const JoinUs = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.7], ["-2.5%", "-85%"]);

  return (
    <div className="w-full relative bg-[#f0f2f4] flex flex-col items-center">
      <div className=" h-[90vh] w-[90vh] z-0  fixed animate-rotate">
        <Image src="/assetring1.png" layout="fill" />
      </div>
      <div class="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <motion.div className=" h-[300vh] flex flex-row relative ">
        <motion.div
          style={{ x: x }}
          ref={ref}
          className=" fixed top-[27.5vh] flex flex-row justify-start items-center"
        >
          <div className=" w-[70vw] mr-[10vw] relative h-[60vh] rounded-2xl bg-black flex flex-row justify-center items-center">
            <div className=" w-9/12 flex flex-col items-start px-[2.5vw]">
              <p className=" text-[3rem] leading-[2.75rem] text-[#DEE2E6]">
                Unlock Opportunities with Hydroshark
              </p>
              <p className=" text-base text-[#DEE2E6] mt-4">
                {
                  "At Hydroshark, we believe in the power of collaboration to create extraordinary experiences and innovative solutions. Partner with us and leverage our expertise, reach, and commitment to quality to amplify your brand and reach new heights."
                }
              </p>
            </div>
            <div className=" flex flex-col items-start justify-between  px-[2.5vw]">
              <div className=" p-4 border-[1px] rounded-full animate-bounceX border-[#DEE2E6]">
                <GoArrowRight className=" text-[#DEE2E6]" />
              </div>
            </div>
          </div>
          <div className=" w-[70vw] mr-[10vw] relative h-[60vh] rounded-2xl bg-[#ede361] flex flex-row justify-center items-center">
            <div className=" flex flex-col w-5/12 items-center z-20 justify-between">
              <div className="w-9/12 h-[50vh] relative">
                <Image src={"/img3.jpeg"} layout="fill" />
              </div>
            </div>
            <div className=" w-7/12 flex flex-col items-start pr-[2.5vw]">
              <p className=" text-[3rem] leading-[2.75rem] text-[#5C6262]">
                Distributors
              </p>
              <p className=" text-base text-[#5C6262] mt-4">
                {
                  "Are you looking to expand your portfolio with a unique, high-demand product? Become an area-based distributor for Hydroshark and join us in our mission to redefine hydration. Our extensive support and comprehensive marketing strategies ensure a seamless distribution experience."
                }
              </p>
              <button className=" px-4 py-2 mt-4 text-white bg-[#181818]">
                Reach Out to Us
              </button>
            </div>
          </div>
          <div className=" w-[70vw] mr-[10vw] relative h-[60vh] rounded-2xl bg-[#308918] flex flex-row justify-center items-center">
            <div className=" w-7/12 flex flex-col items-start pl-[2.5vw]">
              <p className=" text-[3rem] leading-[2.75rem] text-[#DEE2E6]">
                Influencers
              </p>
              <p className=" text-base text-[#DEE2E6] mt-4">
                {
                  "Are you passionate about promoting healthier lifestyle choices? Partner with Hydroshark to create engaging content and share our story with your audience. Together, we can inspire others to make better hydration choices and embrace a healthier lifestyle"
                }
              </p>
              <button className=" px-4 py-2 mt-4 text-white bg-[#181818]">
                Reach Out to Us
              </button>
            </div>
            <div className=" flex flex-col w-4/12 items-center z-20 justify-between">
              <div className="w-9/12 h-[50vh] relative">
                <Image src={"/influencer.jpeg"} layout="fill" />
              </div>
            </div>
          </div>
          <div className=" w-[70vw] mr-[10vw] relative h-[60vh] rounded-2xl bg-[#91979d] flex flex-row justify-center items-center">
            <div className=" w-1/2 flex flex-col items-start pl-[2.5vw]">
              <p className=" text-[3rem] leading-[2.75rem] text-[#181818]">
                Join Us Today
              </p>
              <p className=" text-base text-[#181818] mt-4">
                {
                  "Ready to make a splash with Hydroshark? Fill out the contact form below, and let’s start a conversation about how we can work together to achieve great things."
                }
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center w-1/2 h-full">
              <ContactUs />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JoinUs;
