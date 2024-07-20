"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineGroups3 } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineViewList } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";

const options = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: () => <MdOutlineSpaceDashboard className=" text-black text-xl" />,
  },
  {
    title: "Users",
    path: "/admin/users",
    icon: () => <MdOutlineGroups3 className=" text-black text-xl" />,
  },
  {
    title: "Products",
    path: "/admin/products",
    icon: () => <MdOutlineViewList className=" text-black text-xl" />,
  },
  {
    title: "Active Carts",
    path: "/admin/carts",
    icon: () => <MdAddShoppingCart className=" text-black text-xl" />,
  },
  {
    title: "Orders",
    path: "/admin/orders",
    icon: () => <MdCheckCircleOutline className=" text-black text-xl" />,
  },
  {
    title: "Feedback",
    path: "/admin/feedback",
    icon: () => <MdOutlineMessage className=" text-black text-xl" />,
  },
];

const Sidebar = () => {
  return (
    <div className=" flex flex-col items-start p-4 w-full h-full ">
      {options.map((option) => (
        <a
          key={option.title}
          className="flex flex-row items-center gap-x-4 p-2 w-full cursor-pointer"
        >
          <option.icon />
          <p className=" text-black text-base mt-1">{option.title}</p>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
