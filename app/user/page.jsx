"use client";
import React, { useState, useEffect, use } from "react";
import { useStore } from "@/utils/store";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";
import instance from "@/utils/instance";
import Profile from "@/components/UserComponents/Profile";
import { getUser } from "@/utils/helper";

const userProfile = [
  {
    title: "Profile",
    value: "profile",
  },
  {
    title: "Orders",
    value: "orders",
  },
];

const User = () => {
  const router = useRouter();
  const { user } = useStore();
  const [currentTab, setCurrentTab] = useState("profile");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    } else getUser();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  }, []);

  return (
    <div className="w-screen min-h-screen overflow-hidden relative bg-[#f0f2f4] flex flex-col justify-start items-center">
      <div className="absolute inset-0 h-full w-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className=" flex flex-col items-start h-full w-9/12 mt-8 z-50">
        <div className=" flex flex-row items-start gap-x-4 ">
          {userProfile.map((item) => (
            <button
              key={item.value}
              onClick={() => setCurrentTab(item.value)}
              className={`${
                currentTab != item.value
                  ? "bg-white text-black"
                  : "bg-black text-white"
              } px-4 py-2 rounded-md cursor-pointer`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="w-full h-full flex flex-col items-start bg-gray-50 mt-4 rounded-lg p-4">
          {currentTab == "profile" ? (
            <Profile />
          ) : currentTab == "orders" ? (
            <div></div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
