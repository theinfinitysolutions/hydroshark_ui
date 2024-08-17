// @/components/Layout/Sidebar.js
"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStore } from "@/utils/store";
import { IoMdClose } from "react-icons/io";
import CartCard from "@/components/CartCard";

export default function CartSidebar() {
  const router = useRouter();
  const [show, setter] = useState(false);
  const user = useStore((state) => state.user);
  const cart = useStore((state) => state.cart);
  const addToCart = useStore((state) => state.addToCart);
  const cartSidebar = useStore((state) => state.cartSidebar);
  const setCartSidebar = useStore((state) => state.setCartSidebar);

  useEffect(() => {
    console.log("cartSidebar", cartSidebar);
    setter(cartSidebar.show);
  }, [cartSidebar]);

  const className =
    "bg-white w-[80%] md:w-[50%] xl:w-[30%] transition-[margin-right] ease-in-out duration-500 h-full fixed top-0 bottom-0 right-0 z-40 shadow-2xl";

  const appendClass = show ? " mr-[0]" : " mr-[-80%] md:mr-[-50%] xl:mr-[-30%]";

  const ModalOverlay = () => (
    <div
      className={`flex fixed top-0 right-0 bottom-0 left-0 bg-transparent z-30`}
      onClick={() => {
        setter((oldVal) => !oldVal);
        setCartSidebar({ show: false });
      }}
    />
  );

  // const handleQuantityChange = (str, skuId) => {
  //   let cartList = [...cart];
  //   if (str == "increment") {
  //     cartList.forEach((item) => {
  //       if (item.skuId == skuId) {
  //         item.quantity += 1;
  //       }
  //     });
  //   } else if (str == "decrement") {
  //     cartList.forEach((item) => {
  //       if (item.skuId == skuId) {
  //         if (item.quantity == 1) {
  //           handleDelete(skuId);
  //         } else {
  //           item.quantity = Math.max(1, item.quantity - 1);
  //         }
  //       }
  //     });
  //   } else {
  //     cartList.forEach((item) => {
  //       if (item.skuId == skuId) {
  //         item.quantity = str;
  //       }
  //     });
  //   }

  //   addToCart(cartList);
  // };

  const handleDelete = (item) => {
    let cartList = [...cart].filter((cartItem) => cartItem.tag !== item.tag);
    addToCart(cartList);
  };

  useEffect(() => {
    console.log("cart", cart);
  }, [cart]);

  return (
    <>
      <div
        style={{ zIndex: 200 }}
        className={`${className} ${appendClass} z-30`}
      >
        <div className="flex flex-col px-4 md:px-8 h-full items-center">
          <div className="flex flex-row justify-between items-start mt-8 w-full">
            <div className="text-[1.5rem] font-[500] text-black">Cart</div>
            <a
              onClick={() => {
                setter((oldVal) => !oldVal);
                setCartSidebar({ show: false });
              }}
            >
              <IoMdClose className=" text-black" />
            </a>
          </div>
          {cart.length > 0 ? (
            <div className="flex flex-col mt-4 w-full max-h-[70%] overflow-scroll">
              {cart.map((item, index) => {
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
          ) : (
            <div className="flex flex-row w-full mt-8 text-white">
              Your cart is empty!!
            </div>
          )}
          <div className="flex flex-col absolute bottom-8 w-10/12">
            {cart.length > 0 ? (
              <div className="flex flex-row justify-between items-center">
                <p className="text-white">Total</p>
                <p className="text-white">
                  ₹{" "}
                  {cart.reduce((acc, item) => {
                    return acc + item.price;
                  }, 0)}
                </p>
              </div>
            ) : null}
            {cart.length > 0 ? (
              <button
                onClick={() => {
                  router.push("/checkout");
                  setter((oldVal) => !oldVal);
                  setCartSidebar({ show: false });
                }}
                className="w-full py-2 rounded-md bg-white border-[1px] border-black transition-all hover:bg-black hover:text-white text-black mt-4"
              >
                Checkout
              </button>
            ) : null}
          </div>
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
