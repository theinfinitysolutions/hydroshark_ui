"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import ContactUs from "@/components/ContactUs";
import { useRouter } from "next/navigation";

const JoinUs = () => {
  const ref = useRef();
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.7], ["-11.5%", "-90%"]);

  return (
    <div className="w-full relative bg-[#f0f2f4] flex overflow-hidden flex-col items-center">
      <div className=" h-[70vh] w-[70vh] top-[20vh] lg:top-[15vh] lg:h-[85vh] lg:w-[85vh] z-0  fixed animate-rotate">
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + "/assetring1.png"}
          fill
          alt="assetring1"
        />
      </div>
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className=" h-[300vh] flex flex-row relative ">
        <motion.div
          style={{ x: x }}
          ref={ref}
          className=" fixed top-[15vh] lg:top-[25vh] flex flex-row justify-start items-center"
        >
          <div className=" w-[90vw] h-[80vh] lg:w-[70vw] mr-[10vw] relative lg:h-[65vh] rounded-2xl bg-black flex flex-col lg:flex-row justify-center items-center">
            <div className=" w-11/12 lg:w-9/12 flex flex-col items-start px-[2.5vw] ">
              <h2 className=" text-[2rem] lg:text-[3rem] leading-[2rem] lg:leading-[2.75rem] text-[#DEE2E6]">
                Unlock Opportunities with Hydroshark
              </h2>
              <p className=" text-base text-[#DEE2E6] mt-4">
                {
                  "At Hydroshark, we believe in the power of collaboration to create extraordinary experiences and innovative solutions. Partner with us and leverage our expertise, reach, and commitment to quality to amplify your brand and reach new heights."
                }
              </p>
            </div>
            <div className=" flex flex-col items-start justify-between mt-8 lg:mt-0  px-[2.5vw]">
              <div className=" p-4 border-[1px] rounded-full animate-bounceX border-[#DEE2E6]">
                <GoArrowRight className=" text-[#DEE2E6]" />
              </div>
            </div>
          </div>
          <div className=" w-[90vw] h-[80vh] lg:w-[70vw] mr-[10vw] relative lg:h-[65vh] rounded-2xl bg-[#ede361] flex flex-col lg:flex-row justify-center items-center">
            <div className=" flex flex-col w-5/12 items-center z-20 justify-between">
              <div className="hidden lg:block w-full lg:w-9/12 h-[30vh] lg:h-[50vh] relative">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/img3.webp"}
                  fill
                  alt="hydroshark img3"
                />
              </div>
            </div>
            <div className=" w-11/12 lg:w-7/12 flex flex-col items-start pr-[2.5vw]">
              <p className=" text-[2rem] lg:text-[3rem] leading-[2rem] lg:leading-[2.75rem] text-[#5C6262]">
                Distributors
              </p>
              <p className=" text-base text-[#5C6262] mt-4">
                {
                  "Are you looking to expand your portfolio with a unique, high-demand product? Become an area-based distributor for Hydroshark and join us in our mission to redefine hydration. Our extensive support and comprehensive marketing strategies ensure a seamless distribution experience."
                }
              </p>
              <button
                onClick={() => {
                  router.push("/contact");
                }}
                className=" px-4 py-2 mt-4 text-white bg-[#181818]"
              >
                Reach Out to Us
              </button>
            </div>
          </div>
          <div className=" w-[90vw] h-[80vh] lg:w-[70vw] mr-[10vw] relative lg:h-[65vh] rounded-2xl bg-[#308918] flex flex-row justify-center items-center">
            <div className=" w-11/12 lg:w-7/12  flex-col items-start pl-[2.5vw]">
              <p className=" text-[2rem] lg:text-[3rem] leading-[2rem] lg:leading-[2.75rem] text-[#DEE2E6]">
                Influencers
              </p>
              <p className=" text-base text-[#DEE2E6] mt-4">
                {
                  "Are you passionate about promoting healthier lifestyle choices? Partner with Hydroshark to create engaging content and share our story with your audience. Together, we can inspire others to make better hydration choices and embrace a healthier lifestyle"
                }
              </p>
              <button
                onClick={() => {
                  router.push("/contact");
                }}
                className=" px-4 py-2 mt-4 text-white bg-[#181818]"
              >
                Reach Out to Us
              </button>
            </div>
            <div className=" hidden lg:flex flex-col w-4/12 items-center z-20 justify-between">
              <div className="w-9/12 h-[50vh] relative">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/influencer.jpeg"}
                  fill
                  alt="influencer"
                />
              </div>
            </div>
          </div>
          <div className=" w-[90vw] h-[80vh] lg:w-[70vw] mr-[10vw] relative lg:h-[65vh] rounded-2xl bg-[#91979d] flex flex-col lg:flex-row justify-center items-center">
            <div className=" w-11/12 lg:w-1/2 flex flex-col  items-start lg:pl-[2.5vw]">
              <p className=" text-[2rem] lg:text-[3rem] leading-[2rem] lg:leading-[2.75rem] text-[#181818]">
                Join Us Today
              </p>
              <p className=" hidden lg:block text-base text-[#181818] mt-4">
                {
                  "Ready to make a splash with Hydroshark? Fill out the contact form below, and let’s start a conversation about how we can work together to achieve great things."
                }
              </p>
            </div>
            <div className=" flex flex-col z-40 items-center justify-center w-11/12 lg:w-1/2 ">
              <ContactUs />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinUs;
