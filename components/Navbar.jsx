"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
];

const Navbar = () => {
  const router = useRouter();
  return (
    <div className=" z-50 max-w-screen h-[12.5vh] w-screen flex flex-row justify-between items-center bg-[#f0f2f4]  px-[5vw]">
      <div className="flex flex-row justify-between z-50 w-4/12 border-b-[1px] border-[#181818] px-4">
        {navItems.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className=" cursor-pointer text-base group text-[#181818] py-2"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <a
        onClick={() => {
          router.push("/");
        }}
        className="h-[10vh] cursor-pointer w-[10vh] mt-4 relative"
      >
        <Image src="/hydroshark.png" layout="fill" />
      </a>
      <div className="flex flex-row w-4/12 justify-end z-50 border-b-[1px] border-[#181818] px-4">
        <div className="flex flex-row justify-between w-8/12 ">
          {altItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className=" cursor-pointer text-base text-[#181818] py-2"
            >
              {item.title}
            </Link>
          ))}
          <button
            onClick={() => {
              router.push("/joinus");
            }}
            className=" px-4 py-2 bg-black text-white"
          >
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
