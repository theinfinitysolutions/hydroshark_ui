"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "@/utils/store";
import { products, comments } from "@/utils/consts";
import Image from "next/image";
import { ReplaceScene } from "@/components/CanModel";
import { LuMinus, LuPlus } from "react-icons/lu";
import { MdOutlineLocalShipping } from "react-icons/md";
import { useParams } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { IoTrendingDownOutline } from "react-icons/io5";
import { IoBanOutline } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { LuThumbsUp } from "react-icons/lu";
import { LuThumbsDown } from "react-icons/lu";

const ratings = [
  {
    title: "5 stars",
    value: 5,
    rating: 125,
  },
  {
    title: "4 stars",
    value: 4,
    rating: 25,
  },
  {
    title: "3 stars",
    value: 3,
    rating: 10,
  },
  {
    title: "2 stars",
    value: 2,
    rating: 20,
  },
  {
    title: "1 stars",
    value: 1,
    rating: 40,
  },
];

const ViewProduct = () => {
  const { id } = useParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const {
    showProductModal,
    setShowProductModal,
    addToCart,
    cart,
    setCartSidebar,
  } = useStore();
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  useEffect(() => {
    setSelectedProduct(products.find((product) => product.id == id));
  }, [id]);

  const handleClose = () => {
    setShowProductModal({ show: false, id: "" });
  };

  const addToCartHandler = (item) => {
    console.log("add to cart", [...cart, item]);

    if (cart.length > 0) {
      const found = cart.find((cartItem) => cartItem.item_id === item.item_id);
      if (found) {
        return;
      }
    }

    addToCart([...cart, item]);
    setCartSidebar({ show: true });
  };

  return (
    <div className="bg-[#f0f2f4] w-full min-h-screen h-full relative overflow-y-scroll  flex flex-col items-start">
      <div className=" bg-[#f0f2f4] w-full h-[90vh] relative overflow-y-scroll  flex flex-col items-start">
        <div className=" absolute right-4 top-4 z-20">
          <button
            onClick={() => {
              router.back();
            }}
            className=" flex flex-row justify-start items-center gap-x-2"
          >
            <IoIosArrowRoundBack className=" text-white text-3xl" />
            <p className=" text-white mt-1">Back</p>
          </button>
        </div>
        <div className="flex flex-row justify-between items-center h-full w-full">
          <div className=" w-7/12 h-full flex flex-col bg-[#f0f2f4] items-center justify-center relative ">
            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
            {selectedProduct?.type === "bottle" ? (
              <ReplaceScene
                scene={selectedProduct.title.toLowerCase()}
                orbital={true}
              />
            ) : selectedProduct?.type == "crate" ? (
              <div className=" flex h-[40vh] w-full relative">
                <Image src={selectedProduct.image} layout="fill" className="" />
              </div>
            ) : selectedProduct?.type == "merch" ? (
              <div className=" flex h-[40vh] w-[40vh] relative">
                <Image src={selectedProduct.image} layout="fill" className="" />
              </div>
            ) : null}
          </div>
          <div className=" w-5/12 h-full bg-[#181818] relative flex flex-col items-start pl-8 pr-[7.5vw] justify-center  ">
            <div className=" flex flex-row w-full justify-between items-end">
              <div className=" flex flex-col items-start">
                <p className=" text-white text-sm ">HYDROSHARK</p>
                <div
                  className={`text-[3rem] font-[500] ${
                    selectedProduct?.title == "LEMON"
                      ? "text-[#308918]"
                      : selectedProduct?.title == "MANGO"
                      ? "text-[#dfd434]"
                      : "text-black"
                  }`}
                >
                  {selectedProduct?.title}
                </div>
              </div>
              <div className=" text-[1.25rem] font-[500] mb-2 text-white">
                {`₹ ${selectedProduct?.price}`}
              </div>
            </div>
            <div className=" text-[1rem] text-white mt-4">
              {selectedProduct?.longdescription}
            </div>

            <div className=" flex flex-col items-start mt-[5vh]">
              <p>Quantity</p>
              <div className=" flex flex-row gap-x-4 mt-2">
                <div
                  className={` w-[7.5vw] py-2 flex flex-col items-center border-[1px] border-white bg-black text-white`}
                >
                  <p>12pc</p>
                </div>
                <div
                  className={` w-[7.5vw] py-2 flex flex-col items-center border-[1px] border-black bg-white text-black`}
                >
                  <p>12pc</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between gap-x-4 w-full  mt-8">
              {/* <div className=" flex flex-row items-center justify-between border-[1px] p-2 border-white w-1/2">
                <a className=" text-white text-sm">
                  <LuPlus />
                </a>
                <p className=" text-white mt-1">1</p>
                <a className=" text-white text-sm">
                  <LuMinus />
                </a>
              </div> */}
              <button
                onClick={() => {
                  addToCartHandler(selectedProduct);
                }}
                className=" bg-black text-white border-[1px] border-white w-8/12 py-2"
              >
                {"Add to cart"}
              </button>
            </div>
            <div className=" flex flex-col items-start mt-8">
              <p className=" text-xl font-bold">
                {
                  "Try all of our full exciting flavors and get the best hydration experience"
                }
              </p>
            </div>
            <div className=" flex flex-col w-8/12 items-start mt-4">
              <div className=" flex flex-row justify-start items-center ">
                <MdOutlineLocalShipping className=" text-lg text-white" />
                <p className=" text-[14px] text-white ml-2 mt-[4px]">
                  Shipped in 4-5 working days
                </p>
              </div>
              <div className=" flex flex-row justify-start items-start ">
                <p className=" text-[14px] text-white mt-[2px]">
                  Check our return policy{" "}
                  <span className=" text-cyan-600 underline">
                    <a>here</a>
                  </span>
                </p>
              </div>
            </div>
            <div className=" h-12 absolute  w-full left-0 bottom-8 flex flex-row justify-start gap-x-[10%] px-8">
              <div className=" flex flex-row items-center justify-start">
                <IoTrendingDownOutline className=" text-white text-lg" />
                <p className=" text-white mt-1 ml-1">{"Low Sugar"}</p>
              </div>
              <div className=" flex flex-row items-center justify-start">
                <IoBanOutline className=" text-white text-lg" />
                <p className=" text-white mt-1 ml-1">{"No Caffeine"}</p>
              </div>
              <div className=" flex flex-row items-center justify-start">
                <MdOutlineHealthAndSafety className=" text-white text-lg" />
                <p className=" text-white mt-1 ml-1">{"Vitamins & Minerals"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col bg-[#181818] items-center px-[7.5vw] pt-[7.5vh]">
        <div className=" flex flex-col items-start w-full">
          <div className=" flex flex-col items-start w-full">
            <p className=" text-2xl text-white font-semibold">
              Ratings and Reviews
            </p>
            <div className=" flex flex-col items-start mt-8">
              {ratings.map((rating, index) => (
                <div
                  key={index}
                  className=" flex flex-row items-center justify-start mb-2"
                >
                  <div className=" w-[30vw] h-3 flex flex-col items-start rounded-full border-[0.5px]  border-white bg-black">
                    <div
                      style={{ width: `${rating.rating / 2}%` }}
                      className={`  h-3 rounded-full bg-white`}
                    ></div>
                  </div>
                  <div className=" flex flex-row items-center justify-start ml-2">
                    <p className=" text-white mt-1 ml-1">{rating.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" flex flex-col items-start mt-[10vh]">
            {comments.map((comment, index) => {
              return (
                <div
                  key={index}
                  className=" flex flex-row w-full items-start justify-start mb-8"
                >
                  <div className=" w-[15%] flex flex-col items-start">
                    <div className=" flex flex-row items-center justify-center">
                      <div className=" h-8 w-8 flex flex-col rounded-full items-center bg-white justify-center">
                        <p className=" text-lg text-black mt-1">
                          {comment.name[0]}
                        </p>
                      </div>
                      <p className=" text-white text-sm ml-2 mt-1">
                        {comment.name}
                      </p>
                    </div>

                    <div className=" flex flex-row items-center mt-4 justify-start">
                      {Array(5)
                        .fill(comment.rating || 0)
                        .map((_, index) => {
                          return (
                            <IoMdStar
                              key={index}
                              className={` text-white text-lg`}
                            />
                          );
                        })}
                    </div>
                  </div>
                  <div className=" w-3/4 flex flex-col items-start">
                    <p className=" text-white text-xl">{comment.description}</p>
                    <div className=" flex flex-row justify-start items-center mt-4">
                      <p className=" text-base text-white mt-1">
                        Was this review helpful?{" "}
                      </p>
                      <div className=" flex flex-row w-[10vw] justify-start items-center ml-8">
                        <div className=" flex flex-row justify-start items-center">
                          <LuThumbsUp className=" text-white" />
                          <p className=" text-black mt-1 ml-1">12</p>
                        </div>
                        <div className=" flex flex-row justify-start ml-2 items-center">
                          <LuThumbsDown className=" text-white" />
                          <p className=" text-black mt-1 ml-1">0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" w-full flex flex-col items-center my-8">
            <button className=" bg-white text-black border-[1px] rounded-md border-black w-1/12 py-2 ">
              <p className=" mt-1">{"View More"}</p>
            </button>
          </div>
          <div className=" "></div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
