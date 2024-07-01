"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMenuOutline } from "react-icons/io5";
import { useStore } from "@/utils/store";
import { usePathname } from "next/navigation";

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
    title: "Events & Media",
    path: "/events",
  },
  // {
  //   title: "Media",
  //   path: "/media",
  // },
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
  const pathname = usePathname();
  const { setShow } = useStore();

  return (
    <div
      style={{ zIndex: 100 }}
      className={` ${
        pathname == "/joinus" ? "fixed" : ""
      }  max-w-screen h-[12.5vh] w-[100vw] flex flex-row justify-between items-center bg-[#f0f2f4]  px-[5vw]`}
    >
      <div className="hidden lg:flex flex-row justify-between z-50 w-4/12 border-b-[1px] border-[#181818] px-4">
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
        className="h-[10vh] cursor-pointer w-[10vh] lg:mt-4 relative"
      >
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + "/hydroshark.png"}
          layout="fill"
        />
      </a>
      <div className=" hidden lg:flex flex-row w-4/12 justify-end z-50 border-b-[1px] border-[#181818] px-4">
        <div className="flex flex-row justify-between w-10/12 ">
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
      <div className=" flex lg:hidden z-50  ">
        <button
          onClick={() => {
            setShow({
              show: true,
            });
            console.log("clicked");
          }}
          className=" cursor-pointer"
        >
          <IoMenuOutline className=" text-[#181818] text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
