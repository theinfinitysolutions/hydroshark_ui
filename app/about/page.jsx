"use client";
import React from "react";
import Image from "next/image";
import { whyUs } from "@/utils/consts";
import RevealOnScroll from "@/components/RevealOnScroll";

const About = () => {
  return (
    <div className="w-screen overflow-hidden min-h-screen relative bg-[#f0f2f4] flex flex-col items-center">
      <div className=" h-[80vw] w-[80vw]   lg:h-[90vh] lg:w-[90vh] z-0  fixed animate-rotate">
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + "/assetring1.png"}
          fill
          alt="assetring1"
        />
      </div>
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className=" w-11/12 md:w-10/12 lg:w-9/12 flex flex-col items-start mt-[10vh]  ">
        <div className=" w-full  h-full lg:h-[70vh] z-20 flex flex-col lg:flex-row justify-between items-center">
          <div className=" h-[35vh] lg:h-full w-full lg:w-1/2 flex relative ">
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/img10.webp"}
              fill
              alt="hydroshark img10"
            />
          </div>
          <div className="bg-black w-full lg:w-1/2 h-full flex flex-col items-start py-8 lg:py-0 justify-center px-8">
            <RevealOnScroll
              threshold={0.3}
              addedClasses="flex flex-col items-start"
            >
              <h2 className=" text-[3rem] text-[#DEE2E6] animate-slideUp">
                ABOUT US
              </h2>
              <p className=" text-base text-[#DEE2E6]/80 animate-slideUp">
                {
                  " Hydroshark is a company that specializes in creating the best sports drinks for athletes, gamers, and daredevils. Our drinks are packed with no caffeine, low sugar, electrolytes, vitamins, and minerals. Our drinks are loved by athletes, gamers, and everyone who loves adventure."
                }
              </p>
            </RevealOnScroll>
          </div>
        </div>
        <div className=" w-full  h-full lg:h-[70vh] z-20 flex flex-col-reverse lg:flex-row-reverse justify-between items-center mt-[10vh]">
          <div className="h-[35vh] lg:h-full w-full lg:w-1/2 flex relative ">
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/img5.webp"}
              fill
              alt="hydroshark img5"
            />
          </div>
          <div className="bg-black w-full lg:w-1/2 h-full flex flex-col items-start py-8 lg:py-0 justify-center px-8">
            <RevealOnScroll
              threshold={0.3}
              addedClasses="flex flex-col items-start"
            >
              <p className=" text-[3rem] text-[#DEE2E6] animate-slideUp">
                Our Mission
              </p>
              <p className=" text-base text-[#DEE2E6]/80 animate-slideUp">
                {
                  "At Hydroshark, our mission is to revolutionize the way people hydrate by encouraging a shift from unhealthy energy drinks to nutritious hydration beverages. We aim to provide our consumers with a healthier, tastier alternative that supports their overall well-being. "
                }
              </p>
            </RevealOnScroll>
          </div>
        </div>
        <div className=" w-full  h-full lg:h-[70vh] z-20 flex flex-col lg:flex-row justify-between items-center mt-[10vh]">
          <div className="h-[35vh] lg:h-full w-full lg:w-1/2 flex relative ">
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/img8.webp"}
              fill
              alt="hydroshark img8"
            />
          </div>
          <div className="bg-black w-full lg:w-1/2 h-full flex flex-col items-start py-8 lg:py-0 justify-center px-8">
            <RevealOnScroll
              threshold={0.3}
              addedClasses="flex flex-col items-start"
            >
              <p className=" text-[3rem] text-[#DEE2E6] animate-slideUp">
                Our Vision
              </p>
              <p className=" text-base text-[#DEE2E6]/80 animate-slideUp">
                {
                  "We envision Hydroshark becoming India’s leading sports beverage brand, known for our commitment to health and adventure. We aspire to support and sponsor Indian athletes, providing opportunities for the gifted to shine on both national and international stages."
                }
              </p>
            </RevealOnScroll>
          </div>
        </div>
        <div className=" w-full h-full lg:h-[70vh] z-20 flex flex-col-reverse lg:flex-row-reverse justify-between items-center my-[10vh]">
          <div className=" h-[35vh] lg:h-full w-full lg:w-1/3 flex relative ">
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/img2.webp"}
              fill
              alt="hydroshark img2"
            />
          </div>
          <div className="bg-black w-full lg:w-2/3 h-full flex flex-col items-start justify-center py-8 lg:py-0 px-8">
            <RevealOnScroll
              threshold={0.3}
              addedClasses="flex flex-col items-start"
            >
              <p className=" text-[3rem] leading-[3rem] text-[#DEE2E6] animate-slideUp">
                {" Commitment to the Sports Sector"}
              </p>
              <p className=" text-base text-[#DEE2E6]/80 animate-slideUp mt-4">
                {
                  "Hydroshark believes in playing a vital role in India's sports sector. We aim to be synonymous with adventure and athletic excellence, supporting athletes in their journey to greatness."
                }
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      <div className=" w-full h-full bg-white/95 lg:h-full z-30 flex flex-col items-center py-[5vh]">
        <div className=" flex flex-col items-center mt-4">
          <h3 className=" text-[2rem] lg:text-[3rem] text-center leading-[2.75rem] text-[#181818]">
            WHY CHOOSE HYDROSHARK ?
          </h3>
          <div className=" rounded-full w-9/12 h-1 bg-[#99E9F2]" />
        </div>

        <div className=" mt-[5vh] lg:mt-[10vh] w-11/12 lg:w-10/12 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          {whyUs.map((item, index) => (
            <div
              className="flex flex-col items-start border-[1px] border-[#c7c7c7]"
              key={index}
            >
              <div className=" flex w-full flex-row bg-black items-center p-4">
                <div className="h-10 w-10 relative">
                  <Image
                    src={process.env.NEXT_PUBLIC_API_URL + item.image}
                    fill
                    alt="hydroshark img"
                  />
                </div>
                <h3 className=" text-[1rem] text-white ml-2 mt-1">
                  {item.title}
                </h3>
              </div>

              <p className=" text-[#181818]/80 text-start mt-4 p-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
