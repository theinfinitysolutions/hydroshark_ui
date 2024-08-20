"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMenuOutline } from "react-icons/io5";
import { useStore } from "@/utils/store";
import { usePathname } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiCoinsFill } from "react-icons/pi";

const navItems = [
  {
    title: "Explore",
    path: "/explore",
    subItems: true,
  },

  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Products",
    path: "/products",
  },
];

let subItemsExplore = [
  {
    title: "Explore Hydroshark",
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
  const {
    setShow,
    cartSidebar,
    setCartSidebar,
    showAuthModal,
    setShowAuthModal,
    showHydrosharkCoinsModal,
    setShowHydrosharkCoinsModal,
  } = useStore();
  const [currentHover, setCurrentHover] = useState("");
  const [currentHoverSub, setCurrentHoverSub] = useState(0);
  const { user } = useStore();

  if (pathname.includes("/admin")) {
    return null;
  }

  return (
    <div
      onMouseLeave={() => {
        setCurrentHover("");
        setCurrentHoverSub(0);
      }}
      style={{ zIndex: 100 }}
      className={` ${
        pathname == "/joinus" ? "fixed" : ""
      }  max-w-screen h-[12.5vh] w-[100vw] flex flex-row justify-between items-center bg-[#f0f2f4]  px-[5vw]`}
    >
      <div className="hidden lg:flex flex-row justify-between z-50 w-4/12 border-b-[1px] border-[#181818] px-2">
        {navItems.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            aria-disabled={item.subItems ? true : false}
            onMouseEnter={() => {
              setCurrentHover(item.path);
            }}
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
          fill
          alt="hydroshark"
        />
      </a>
      <div className=" hidden lg:flex flex-row w-4/12 justify-end z-50 border-b-[1px] border-[#181818] px-4">
        {/* <div className=" flex flex-row justify-center items-center gap-x-2 mr-8">
          <p className=" text-sm text-black mt-1">SHIP TO</p>
          <div className=" px-2 border border-black">
            <p className=" text-sm text-black mt-1">IND</p>
          </div>
        </div> */}

        <a
          onMouseEnter={() => {
            setCurrentHover("/coins");
          }}
          className=" py-2 mx-4 cursor-pointer"
        >
          <PiCoinsFill className=" text-[#181818] text-2xl" />
        </a>
        <a
          onClick={() => {
            setShowAuthModal({ show: true });
          }}
          className=" py-2 mx-4 cursor-pointer"
        >
          {!user ? (
            <FaRegCircleUser className=" text-[#181818] text-xl" />
          ) : (
            <div className=" h-[3.5vh] w-[3.5vh] flex flex-col items-center justify-center rounded-full bg-green-600 text-white">
              <p className=" text-xs mt-1">{user.name[0] || "U"}</p>
            </div>
          )}
        </a>
        <a
          onClick={() => {
            setCartSidebar({ show: true });
            console.log("clicked");
          }}
          className=" py-2 mx-4 cursor-pointer z-10"
        >
          <FiShoppingCart className=" text-[#181818] text-xl" />
        </a>
        <button
          onClick={() => {
            router.push("/joinus");
          }}
          className=" px-4 py-2 text-white bg-black mb-1 ml-4 cursor-pointer "
        >
          Join Us
        </button>
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

      <div
        className={` absolute ${
          currentHover == "/coins" ? "block" : "hidden"
        } top-[15vh] right-[10vw] w-[25vw] bg-white border z-50 animate-slideUpfast`}
      >
        <div className="flex flex-col items-start px-4 py-4">
          <div className=" flex flex-row justify-start items-center">
            <PiCoinsFill className=" text-2xl text-black" />
            <h2 className=" text-black text-xl ml-2">HydroShark Coins</h2>
          </div>
          <p className=" text-black text-xs mt-2">
            {
              "You can now earn HydroShark coins by participating in events and by buying HydroShark products and redeem them for exciting offers."
            }
          </p>
          <button
            onClick={() => {
              setShowHydrosharkCoinsModal({ show: true });
            }}
            className=" bg-[#181818]/80 text-white px-2 py-1 text-sm rounded-md mt-2"
          >
            Learn More
          </button>
        </div>
      </div>

      <div
        className={` absolute ${
          currentHover == "/explore" ? "block" : "hidden"
        } top-[9vh] min-w-[15vw] bg-white border z-50 animate-slideUpfast`}
      >
        <div className=" w-full grid grid-cols-1 p-2 gap-x-2">
          {subItemsExplore.map((service, index) => {
            return (
              <a
                key={index}
                onClick={() => {
                  setCurrentHover("");
                }}
                href={service.path}
                className={` text-black hover:bg-black  hover:text-white py-2 px-2 rounded-md text-sm cursor-pointer `}
              >
                {service.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
