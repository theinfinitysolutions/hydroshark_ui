"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const navItems = [
  {
    title: "Explore",
    path: "/explore",
  },
  {
    title: "Athletes",
    path: "/athletes",
  },
  {
    title: "Events",
    path: "/events",
  },
  {
    title: "Media",
    path: "/media",
  },
];

const altItems = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Shop",
    path: "/shop",
  },
];

const Footer = () => {
  return (
    <div className=" flex flex-col w-[100vw] max-w-screen h-full items-center overflow-hidden bg-[#181818] py-8 z-40 relative">
      <div className="absolute inset-0 h-full w-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start w-full lg:w-10/12">
        <div className=" h-[10vh] w-[10vh] relative">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/hydroshark.png"}
            layout="fill"
          />
        </div>
        <div className="w-6/12 lg:w-3/12 mt-8 lg:mt-0 flex flex-row justify-between z-20">
          <div className=" flex flex-col items-start gap-y-1">
            {navItems.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className=" text-xs group cursor-pointer text-[#DEE2E6]"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className=" flex flex-col items-start gap-y-1">
            {altItems.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className=" text-xs group cursor-pointer text-[#DEE2E6]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-row w-4/12 lg:w-1/12 mt-8 lg:mt-0 justify-between items-center">
          <a onClick={() => {}}>
            <FaInstagram className="text-[#DEE2E6] text-base" />
          </a>
          <a onClick={() => {}}>
            <FaXTwitter className="text-[#DEE2E6] text-base" />
          </a>
          <a onClick={() => {}}>
            <FaFacebook className="text-[#DEE2E6] text-base" />
          </a>
          <a onClick={() => {}}>
            <AiOutlineYoutube className="text-[#DEE2E6] text-base" />
          </a>
        </div>
      </div>
      <div className="w-full max-w-screen overflow-hidden flex mt-4 mb-8 flex-col items-center lg:-mt-8">
        <p
          style={{
            transform: `perspective(1000px) rotateX(45deg)`,
          }}
          className=" text-[3.5rem] lg:text-[9rem] xl:text-[12rem] text-[#DEE2E6]"
        >
          HYDROSHARK
        </p>
      </div>
      <div className="w-full mt-6 flex absolute bottom-0 p-2 flex-col-reverse items-center  lg:flex-row lg:justify-between">
        <p className="text-center text-xs text-[#DEE2E6]">
          &copy; {new Date().getFullYear()} Hydroshark. All rights reserved.
        </p>
        <div className="flex flex-row text-sm justify-center lg:justify-end w-full  lg:w-3/12 mb-4 lg:mb-0 text-[#DEE2E6]">
          <p className=" text-[11px] sm:text-[12px]">
            Developed and Maintained By{" "}
          </p>
          <a
            href="https://theinfinitysolutions.net"
            className="underline font-bold text-[11px] sm:text-[12px] ml-2"
          >
            The Infinity Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
