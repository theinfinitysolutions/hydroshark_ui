"use client";
import React, { useState, useEffect } from "react";
import { useStore } from "@/utils/store";
import CartCard from "@/components/CartCard";
import { products } from "@/utils/consts";

const Checkout = () => {
  const { cart, addToCart } = useStore();
  const [cartList, setCartList] = useState(cart);

  return (
    <div className="w-full min-h-screen relative bg-[#f0f2f4] flex flex-col items-center">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className="w-11/12 h-full mt-[2.5vh] flex flex-col items-start">
        <div className=" flex flex-col w-full items-start">
          <p className=" text-[2.5rem] text-[#181818]">Checkout</p>
        </div>
        <div className=" w-full flex h-full flex-row justify-between mt-4 ">
          <div className=" flex flex-col h-full z-40 bg-white border-[0.5px] p-8 border-[#c7c7c7]/60 items-start w-1/2">
            <div className=" flex flex-col items-start w-full">
              <div className=" flex flex-row w-full justify-between items-baseline">
                <p className=" text-xl text-black font-semibold">Contact</p>
                <a className=" text-black underline text-sm">login</a>
              </div>
              <div className=" border-[1px] border-black h-12 w-full mt-4 rounded-md overflow-hidden">
                <input
                  placeholder="Email"
                  className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
            <div className=" flex flex-col items-start w-full mt-[5vh]">
              <div className=" flex flex-row w-full justify-between items-baseline">
                <p className=" text-xl text-black font-semibold">Delivery</p>
              </div>
              <div className=" flex flex-col w-full items-start mt-4">
                <div className=" flex flex-row justify-between w-full">
                  <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                    <input
                      placeholder="First Name"
                      className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                    />
                  </div>
                  <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                    <input
                      placeholder="Last Name"
                      className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
                <div className=" border-[1px] border-black h-12 w-full mt-4 rounded-md overflow-hidden">
                  <input
                    placeholder="Address"
                    className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                  />
                </div>
                <div className=" flex flex-row justify-between w-full mt-4">
                  <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                    <input
                      placeholder="City"
                      className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                    />
                  </div>
                  <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                    <input
                      placeholder="State"
                      className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
                <div className=" flex flex-row justify-between w-full mt-4">
                  <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                    <input
                      placeholder="Country"
                      className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                    />
                  </div>
                  <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                    <input
                      placeholder="Zipcode"
                      className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-start w-full mt-[5vh]">
              <div className=" flex flex-row w-full justify-between items-baseline">
                <p className=" text-xl text-black font-semibold">
                  Shipping Method
                </p>
              </div>
              <div className=" flex flex-col items-center w-full justify-center bg-gray-100 py-8 mt-4 rounded-md">
                <p className=" text-[#6b6a6a]">
                  Please select your desired shipping method
                </p>
              </div>
            </div>
            <div className=" flex flex-col items-start w-full mt-[5vh]">
              <div className=" flex flex-row w-full justify-between items-baseline">
                <p className=" text-xl text-black font-semibold">
                  Payment Method
                </p>
              </div>
              <div className=" flex flex-col items-center w-full justify-center bg-gray-100 py-8 mt-4 rounded-md">
                <p className=" text-[#6b6a6a]">
                  Please select your desired payment method
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-start w-1/2 px-[5vw] py-8">
            <div className=" flex flex-col items-start w-full">
              <div className=" flex flex-row w-full justify-between items-baseline">
                <p className=" text-xl text-black font-semibold">Cart</p>
              </div>
              <div className=" w-full flex flex-col items-start mt-4">
                {products.slice(0, 2).map((item, index) => {
                  return (
                    <CartCard
                      key={index}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      image={item.image}
                      onDelete={() => {
                        handleDelete(item);
                      }}
                    />
                  );
                })}
              </div>
              <div className=" w-full flex flex-col items-start">
                <div className=" flex flex-row w-full justify-between items-center mt-4">
                  <p className=" text-black text-lg">Sub total</p>
                  <p className=" text-black text-lg">
                    ₹{"1200"}
                    {/* {cartList.reduce((acc, item) => {
                      return acc + item.price;
                    }, 0)} */}
                  </p>
                </div>
                <div className=" flex flex-row w-full justify-between items-center mt-4">
                  <p className=" text-black text-lg">
                    TAX <span className=" text-xs">{"(18%)"}</span>
                  </p>
                  <p className=" text-black text-lg">
                    ₹{"200"}
                    {/* {cartList.reduce((acc, item) => {
                      return acc + item.price;
                    }, 0)} */}
                  </p>
                </div>
                <div className=" flex flex-row w-full justify-between items-center mt-4">
                  <p className=" text-black text-lg">Total</p>
                  <p className=" text-black text-lg">
                    ₹{"1400"}
                    {/* {cartList.reduce((acc, item) => {
                      return acc + item.price;
                    }, 0)} */}
                  </p>
                </div>
              </div>
              <div className=" w-full flex flex-col items-start mt-8 z-20">
                <button className=" w-full bg-black text-white py-2 cursor-pointer rounded-md border-[1px] border-black group hover:bg-white ">
                  <p className=" text-base mt-1 text-white transition-all duration-200 group-hover:scale-110 group-hover:text-black">
                    Proceed to checkout
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
