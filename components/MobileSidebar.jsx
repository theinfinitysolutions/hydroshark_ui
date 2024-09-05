"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/utils/store";
import Link from "next/link";

const navbarItems = [
  {
    title: "Products",
    link: "/products",
  },
  {
    title: "Explore Hydroshark",
    link: "/explore",
  },
  {
    title: "Athletes",
    link: "/athletes",
  },
  {
    title: "Events & Media",
    link: "/events",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Join Us!",
    link: "/joinus",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

const additionalItems = [
  {
    title: "Profile",
    link: "/user",
  },
  {
    title: "Orders",
    link: "/user",
  },
];
export default function MobileSidebar() {
  const router = useRouter();
  const [show, setter] = useState(false);
  const [navbarList, setNavbarList] = useState(navbarItems);
  const { sidebar, setShow, showAuthModal, setShowAuthModal, user } =
    useStore();

  useEffect(() => {
    if (user) {
      setNavbarList([...navbarItems, ...additionalItems]);
    }
  }, [user]);

  useEffect(() => {
    console.log(sidebar.show);
    setter(sidebar.show);
  }, [sidebar.show]);
  // Define our base class
  const className =
    "bg-[#ffffff] w-[80vw] lg:hidden transition-[margin-right] ease-in-out duration-500 fixed lg:static top-0 bottom-0 right-0 z-50";
  // Append class based on state of sidebar visiblity
  const appendClass = show ? " mr-[0]" : " mr-[-80vw] lg:mr-0";

  // Clickable menu items
  const MenuItem = ({ icon, name, route }) => {
    // Highlight menu item based on currently displayed route
    const colorClass =
      router.pathname === route
        ? "text-white"
        : "text-white/50 hover:text-white";

    return (
      <Link
        onClick={() => {
          router.push(route);
          setter((oldVal) => !oldVal);
          setShow({
            show: false,
          });
        }}
        href={route}
        className={`flex flex-row items-baseline gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-black/10 ${colorClass}`}
      >
        <div className="text-[#181818] text-xl ">{name}</div>
      </Link>
    );
  };

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex lg:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-50`}
      onClick={() => {
        setShow({
          show: false,
        });
      }}
    />
  );

  return (
    <>
      <div style={{ zIndex: 100 }} className={`${className}${appendClass}`}>
        <div className="text-md px-2 mt-[20px] -mb-2 border-b-2 border-[#c7c7c7]">
          <p className=" text-[#181818] text-lg pl-2">Menu</p>
        </div>
        <div className="flex flex-col mt-2">
          {navbarList.map((item, index) => {
            return <MenuItem key={index} name={item.title} route={item.link} />;
          })}

          {user ? (
            <div className=" flex flex-row items-center justify-start gap-x-4 px-4 bg-gray-200 rounded-lg py-4 mt-4 mx-4">
              <div className=" h-[5vh] w-[5vh] rounded-full bg-green-400 flex justify-center items-center">
                <p className=" text-base text-white">{user.name[0]}</p>
              </div>
              <div className=" flex flex-col w-8/12 items-start">
                <p className=" text-sm text-black">{user.name}</p>
                <p className=" text-xs text-black">{user.email}</p>
              </div>
            </div>
          ) : null}

          {user ? (
            <button
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("token");

                setShow({
                  show: false,
                });
                setShow({
                  show: false,
                });
                router.push("/");
              }}
              className=" w-11/12 py-2 bg-[#181818] text-white mx-4 mt-4"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setShowAuthModal({
                  show: true,
                  message: "",
                });
                setShow({
                  show: false,
                });
              }}
              className=" w-11/12 py-2 bg-[#181818] text-white mx-4 mt-4"
            >
              Login
            </button>
          )}
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
