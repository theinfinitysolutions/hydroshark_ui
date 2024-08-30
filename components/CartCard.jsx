"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { useStore } from "@/utils/store";
import { textColors } from "@/utils/consts";

const CartCard = (props) => {
  const { cart, addToCart } = useStore();

  const handleCartQuantityChange = (id, action) => {
    let cartObj = [...cart];

    if (action == "increment") {
      cartObj.forEach((item, index) => {
        if (item.id == id) {
          item.product_quantity += 1;
        }
      });
    } else if (action == "decrement") {
      cartObj.forEach((item, index) => {
        if (item.id == id && item.product_quantity > 1) {
          item.product_quantity -= 1;
        } else if (item.id == id && item.product_quantity == 1) {
          cartObj.splice(index, 1);
        }
      });
    } else if (action == "delete") {
      cartObj.forEach((item, index) => {
        if (item.id == id) {
          cartObj.splice(index, 1);
        }
      });
    }

    addToCart(cartObj);
  };

  return (
    <div className=" w-full flex flex-col items-start p-4 border-[1px] border-black mb-3">
      <div className=" flex flex-row w-full justify-between">
        <div className=" flex flex-col items-start w-[20%] h-[10vh] relative">
          <Image src={props.image} fill style={{ objectFit: "contain" }} />
        </div>
        <div className=" w-[80%] h-full flex flex-col items-start  px-4">
          <p className=" text-base text-black">
            HYDROSHARK{" "}
            <span className={`${textColors[props.product_title]}`}>
              {props.product_title}
            </span>{" "}
          </p>
          <div className=" flex flex-row justify-between w-full items-center">
            <div className="flex flex-row justify-start items-center text-xs gap-x-2">
              <p className=" text-red-400  line-through 	">
                {" "}
                {`₹ ${props?.price}`}
              </p>
              <p className=" text-black	"> {`₹ ${props?.discounted_amount}`}</p>
              <p className=" text-black	">/ {props?.section_title} </p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-x-2 mt-2 py-1 px-4 border-[1px] border-black">
            <a
              onClick={() => {
                props.onQuantityChange("minus");
              }}
              className=" cursor-pointer text-black text-sm"
            >
              <LuMinus />
            </a>
            <p className=" text-black text-sm mt-1">{props.product_quantity}</p>
            <a
              onClick={() => {
                props.onQuantityChange("add");
              }}
              className=" cursor-pointer text-black text-sm"
            >
              <LuPlus />
            </a>
          </div>
        </div>
        <a
          onClick={() => {
            props.onDelete();
          }}
          className=" w-[20%]  h-full flex flex-col items-center justify-center"
        >
          <MdDeleteOutline className=" text-black text-xl cursor-pointer " />
        </a>
      </div>
    </div>
  );
};

export default CartCard;
