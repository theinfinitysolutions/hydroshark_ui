"use client";
import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

const Events = () => {
  return (
    <div className="w-screen min-h-screen overflow-hidden relative bg-[#f0f2f4] flex flex-col justify-center items-center">
      <div className="absolute inset-0 h-full w-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      {/* <div className=" flex flex-col items-start w-10/12 h-full z-20">
        <div className="flex flex-col items-start mt-[5vh] w-full">
          <h2 className="text-[3rem] leading-[2.5rem] text-[#181818]">
            Events
          </h2>
          <p className=" text-base text-[#181818]">
            {" Check out our latest events and coverage "}
          </p>

          <div className="flex flex-row w-full justify-between items-start mt-[2.5vh]">
            <div className=" flex flex-col  h-full items-center">
              {[1, 2, 3, 4].map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`h-[12.5vh] w-[12.5vh] relative mb-4 border-[2px] ${
                      index == 0 ? "border-[#343a40]" : "border-[#adb5bd]"
                    } rounded-md overflow-hidden`}
                  >
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_API_URL + `/img${item + 2}.jpeg`
                      }
                      layout="fill"
                    />
                  </div>
                );
              })}
            </div>
            <div className=" flex flex-row w-10/12 items-start group h-[57.5vh] relative overflow-hidden bg-white border-[0.5px] border-[#c7c7c7]/70 rounded-xl shadow-sm ">
              <div className=" w-8/12 h-full relative z-0">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + "/img7.jpeg"}
                  layout="fill"
                />
              </div>
              <div className=" flex flex-col w-4/12 h-full items-start justify-center px-8">
                <h1 className="text-[2.5rem] leading-[2.5rem] text-[#181818]">
                  Hydroshark Event
                </h1>
                <p className=" text-sm leading-4 text-[#181818] mt-4">
                  {"Demo HydroShark Event Event description "}
                </p>
                <div className=" flex flex-row w-full justify-between items-center mt-4">
                  <div className=" flex flex-row items-center">
                    <IoLocationSharp className=" text-[#181818] text-lg" />
                    <p className=" text-[#181818] text-sm ml-1">Jaipur</p>
                  </div>
                  <div className=" flex flex-col  bg-[#868e96] rounded-md items-center p-2">
                    <p className=" text-sm text-white">12</p>
                    <p className=" text-[10px] text-white">{"Dec'24"}</p>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
        <div className="flex flex-col items-start mt-[10vh] w-full">
          <h2 className="text-[3rem] leading-[2.5rem] text-[#181818]">Media</h2>
          <p className=" text-base text-[#181818]">
            {" Check out our latest news and media coverage "}
          </p>

          <div className="flex flex-row w-full justify-between items-start mt-[2.5vh]">
            {[1, 2, 3].map((item, index) => {
              return (
                <a
                  key={index}
                  className=" flex cursor-pointer flex-col items-start group h-[45vh] relative w-[30%] overflow-hidden bg-white border-[0.5px] border-[#c7c7c7]/70 rounded-md shadow-sm "
                >
                  <div className=" w-full h-[30vh] relative z-0">
                    <Image
                      key={index}
                      src={process.env.NEXT_PUBLIC_API_URL + "/img2.jpeg"}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-col z-20 pt-4 items-start justify-center w-full h-[12.5vh] px-4 bg-white">
                    <div className=" w-full flex flex-col items-start">
                      <h1 className="text-[1.25rem] leading-[1rem] text-black">
                        HydroShark Media Coverage {item}
                      </h1>
                      <p className=" text-sm mt-1 text-[#adb5bd]">
                        {" HydroShark Media Coverage description "}
                      </p>
                      <div className=" flex flex-row w-full justify-between rounded-md items-center mt-4">
                        <p className=" text-[10px] text-[#868e96]">
                          Updated : 12/10/2024
                        </p>
                        <p className=" text-[10px] text-[#868e96]">6 min</p>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-col items-start my-[10vh] w-full ">
          <h2 className="text-[3rem] leading-[2.5rem] text-[#181818]">
            Gallery
          </h2>
          <div className=" grid grid-cols-3 gap-4 w-full justify-between items-center mt-[2.5vh]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
              return (
                <div
                  key={index}
                  className=" flex h-[40vh] w-full relative overflow-hidden group"
                >
                  <Image
                    src={`/img${item}.jpeg`}
                    layout="fill"
                    className=" group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div> */}

      <h2 className=" text-3xl lg:text-[4rem] text-[#181818] mb-[35vh] lg:mb-[20vh] ">
        Coming Soon !
      </h2>
      <p className=" absolute top-[30vh] text-[5rem] md:text-[9rem] lg:text-[14rem] text-black/5 leading-[5rem] lg:leading-[13rem] ">
        HYDROSHARK
      </p>
    </div>
  );
};

export default Events;
