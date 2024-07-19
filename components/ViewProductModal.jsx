"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "@/utils/store";
import { products } from "@/utils/consts";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import { ReplaceScene } from "./CanModel";
import { LuMinus, LuPlus } from "react-icons/lu";
import { MdOutlineLocalShipping } from "react-icons/md";

const ViewProductModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { showProductModal, setShowProductModal, addToCart, cart } = useStore();
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    setIsOpen(showProductModal.show);
    if (showProductModal.show) {
      setSelectedProduct(
        products.find((product) => product.id === showProductModal.id)
      );
    }
  }, [showProductModal]);

  const handleClose = () => {
    setShowProductModal({ show: false, id: "" });
  };

  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } z-50 inset-0 flex items-center justify-center bg-black/10`}
    >
      <div className="bg-white w-8/12 h-[70vh] relative overflow-y-scroll  flex flex-col items-start shadow-xl">
        <div className=" absolute right-4 top-4">
          <button
            onClick={() => {
              handleClose();
            }}
          >
            <CgClose className=" text-black" />
          </button>
        </div>
        <div className="flex flex-row justify-between items-center h-full w-full">
          <div className=" w-7/12 h-full flex flex-col bg-[#f0f2f4] relative ">
            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
            {selectedProduct.type === "bottle" ? (
              <ReplaceScene
                scene={selectedProduct.title.toLowerCase()}
                orbital={true}
              />
            ) : null}
          </div>
          <div className=" w-5/12 h-full bg-[#DEE2E6] flex flex-col items-start px-8 justify-center  ">
            <div className=" flex flex-row w-full justify-between items-end">
              <div className=" flex flex-col items-start">
                <p className=" text-black text-sm">HYDROSHARK</p>
                <div
                  className={`text-[2.5rem] font-[500] ${
                    selectedProduct.title == "LEMON"
                      ? "text-[#308918]"
                      : selectedProduct.title == "MANGO"
                      ? "text-[#dfd434]"
                      : null
                  }`}
                >
                  {selectedProduct.title}
                </div>
              </div>
              <div className=" text-[1.5rem] font-[500] mb-2 text-black">
                {`₹ ${selectedProduct.price}`}
              </div>
            </div>
            <div className=" text-[1rem] text-black mt-4">
              {selectedProduct.longdescription}
            </div>

            <div className="flex flex-row w-full justify-between items-center mt-8">
              <div className=" flex flex-col w-1/3  items-center justify-center p-2">
                <p className=" text-xs text-cyan-600">Calories</p>
                <p className=" text-lg lg:text-xl text-black">{"99 Kcal"}</p>
              </div>
              <div className=" flex flex-col w-1/3  items-center justify-center p-2">
                <p className=" text-xs text-cyan-600">Caffeine</p>
                <p className="  text-lg lg:text-xl text-black">{"0 mg"}</p>
              </div>
              <div className=" flex flex-col w-1/3  items-center justify-center p-2">
                <p className=" text-xs text-cyan-600">Vitamins</p>
                <p className="  text-lg lg:text-xl text-black">
                  {"B - 2,6,12"}
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between gap-x-4 w-full  mt-8">
              <div className=" flex flex-row items-center justify-between border-[1px] p-2 border-black w-1/2">
                <a className=" text-black text-sm">
                  <LuPlus />
                </a>
                <p className=" text-black mt-1">1</p>
                <a className=" text-black text-sm">
                  <LuMinus />
                </a>
              </div>
              <button
                onClick={() => {
                  addToCart(selectedProduct);
                }}
                className=" bg-white text-black border-[1px] border-black w-full py-2"
              >
                {"Add to cart"}
              </button>
            </div>
            <div className=" flex flex-col w-full items-center mt-4">
              <div className=" flex flex-row justify-center items-start ">
                <MdOutlineLocalShipping className=" text-lg text-black" />
                <p className=" text-[10px] text-black ml-2 mt-[4px]">
                  Shipped in 4-5 working days
                </p>
              </div>
              <div className=" flex flex-row justify-center items-start ">
                <p className=" text-[10px] text-black ml-2 mt-[2px]">
                  Check our return policy{" "}
                  <span className=" text-cyan-600 underline">
                    <a>here</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProductModal;
