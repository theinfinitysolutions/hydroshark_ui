"use client";
import React, { use, useEffect, useState } from "react";
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
import ProductCTA from "@/components/ProductCTA";
import { PiCoinsFill } from "react-icons/pi";
import instance from "@/utils/instance";
import Spinner from "@/components/Spinner";
import { getUser } from "@/utils/helper";
import { textColors } from "@/utils/consts";

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
  const [loading, setLoading] = useState(true);
  const {
    showProductModal,
    setShowProductModal,
    addToCart,
    cart,
    setCartSidebar,
    user,
  } = useStore();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedSection, setSelectedSection] = useState({});

  useEffect(() => {
    if (!user) getUser();
  }, [user]);

  const getProductById = (id) => {
    setLoading(true);
    instance
      .get(`/drinks/product/${id}/`)
      .then((res) => {
        console.log("products", res.data);
        setSelectedProduct(res.data);
        setSelectedSection({ ...res.data.product_sections[0] });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
      });
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  useEffect(() => {
    setSelectedProduct(products.find((product) => product.id == id));
  }, [id]);

  const addToCartHandler = (item) => {
    if (cart.length > 0) {
      const found = cart.find((cartItem) => cartItem.id == item.id);
      if (found) {
        let cartList = cart;
        cartList.forEach((cartItem) => {
          if (cartItem.id == item.id) {
            cartItem.product_quantity += 1;
          }
        });
        addToCart(cartList);
        setCartSidebar({ show: true });
        return;
      }
    }

    addToCart([...cart, item]);
    setCartSidebar({ show: true });
  };

  return (
    <div className="bg-[#f0f2f4] w-full min-h-screen h-full relative overflow-y-scroll  flex flex-col items-start">
      {loading ? (
        <div className=" w-full h-[50vh] relative flex justify-center items-center">
          <Spinner loading={loading} size={48} color="#000000" />
        </div>
      ) : (
        <div className=" bg-[#f0f2f4] w-full h-full lg:h-[90vh] relative overflow-y-scroll  flex flex-col items-start">
          <div className=" absolute right-4 top-4 z-20">
            <button
              onClick={() => {
                router.back();
              }}
              className=" flex flex-row justify-start items-center gap-x-2"
            >
              <IoIosArrowRoundBack className=" text-black lg:text-white text-3xl" />
              <p className=" text-black lg:text-white mt-1">Back</p>
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center h-full w-full">
            <div className=" w-full lg:w-7/12 h-[60vh] lg:h-full flex flex-col bg-[#f0f2f4] items-center justify-center relative ">
              <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
              {selectedProduct.product_title ? (
                <ReplaceScene
                  scene={selectedProduct.product_title.toLowerCase()}
                  orbital={true}
                />
              ) : null}
            </div>
            <div className=" w-full lg:w-5/12 h-full py-8 lg:py-0 bg-[#181818] relative flex flex-col items-start pl-8 pr-[7.5vw] justify-center  ">
              <div className=" flex flex-row w-full justify-between items-end">
                <div className=" flex flex-col items-start">
                  <p className=" text-white text-sm ">HYDROSHARK</p>
                  <div
                    className={`text-[3rem] font-[500] text-[${
                      textColors[selectedProduct?.product_title] || "#ffff"
                    }]`}
                  >
                    {selectedProduct?.product_title}
                  </div>
                </div>
                <div className="flex flex-row justify-end items-center text-xl mb-2 gap-x-2">
                  <p className=" text-red-400  line-through 	">
                    {" "}
                    {`₹ ${selectedSection?.discounted_amount}`}
                  </p>
                  <p className=" text-white	">
                    {" "}
                    {`₹ ${selectedSection?.price}`}
                  </p>
                </div>
              </div>
              <div className=" text-[1rem] text-white mt-4">
                {selectedProduct?.product_description}
              </div>

              <div className=" flex flex-col w-full items-start mt-[5vh]">
                <p>Quantity</p>
                <div className=" flex flex-row gap-x-4 mt-2">
                  {selectedProduct?.product_sections?.map((section, index) => {
                    return (
                      <button
                        onClick={() => setSelectedSection(section)}
                        key={index}
                        className={` px-4 lg:px-0 lg:w-[5vw] py-2 text-sm flex flex-col items-center border-[1px] border-white ${
                          !(selectedSection?.id == section?.id)
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        } `}
                      >
                        <p>{section?.section_title}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className=" flex flex-col lg:flex-row items-start lg:items-center lg:justify-between w-full  mt-4 lg:mt-8">
                <div className="flex flex-row justify-start items-center text-sm gap-x-2">
                  <p className=" text-red-400  line-through 	">
                    {" "}
                    {`₹ ${selectedSection?.price}`}
                  </p>
                  <p className=" text-white	">
                    {" "}
                    {`₹ ${selectedSection?.discounted_amount}`}
                  </p>
                  <p className=" text-white	">
                    / {selectedSection?.section_title}{" "}
                  </p>
                </div>
                <div className=" flex flex-row justify-end items-center">
                  <p className=" text-white mr-2">
                    {selectedSection?.hydroshark_points_on_purchase}
                  </p>
                  <PiCoinsFill className=" text-xl text-white" />
                  <p className=" text-white text-base ml-1">HydroShark Coins</p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between gap-x-4 w-full mt-[5vh]">
                <button
                  onClick={() => {
                    let obj = {
                      ...selectedSection,
                      product_title: selectedProduct.product_title,
                      image:
                        selectedProduct?.product_primary_image?.image
                          ?.cloudfront,
                      product_quantity: 1,
                    };

                    addToCartHandler(obj);
                  }}
                  className=" bg-black text-white border-[1px] border-white w-8/12 py-2"
                >
                  {loading ? (
                    <Spinner color="#fff" size={24} loading={loading} />
                  ) : (
                    <p>{"Add to cart"}</p>
                  )}
                </button>
              </div>
              <div className=" flex flex-col items-start mt-8">
                <p className=" text-base lg:text-xl font-bold">
                  {
                    "Try all of our full exciting flavors and get the best hydration experience"
                  }
                </p>
              </div>
              <div className=" flex flex-col w-8/12 items-start mt-4 mb-[5vh] lg:mb-0">
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
              <div className=" lg:h-12 absolute  w-full left-0 bottom-2 flex flex-row justify-center lg:justify-start gap-x-4 lg:gap-x-[10%] px-2 lg:px-8">
                <div className=" flex flex-row items-center justify-start">
                  <IoTrendingDownOutline className=" text-white text-lg" />
                  <p className=" text-sm lg:text-base text-white mt-1 ml-1">
                    {"Low Sugar"}
                  </p>
                </div>
                <div className=" flex flex-row items-center justify-start">
                  <IoBanOutline className=" text-white text-lg" />
                  <p className=" text-sm lg:text-base text-white mt-1 ml-1">
                    {"No Caffeine"}
                  </p>
                </div>
                <div className=" flex flex-row items-center justify-start">
                  <MdOutlineHealthAndSafety className=" text-white text-lg" />
                  <p className=" text-sm lg:text-base text-white mt-1 ml-1">
                    {"Vitamins & Minerals"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className=" w-full flex flex-col bg-[#181818] items-center px-[7.5vw] pt-[7.5vh]">
        <div className=" flex flex-col items-start w-full">
          <div className=" flex flex-col items-start w-full">
            <p className=" text-2xl text-white font-semibold">
              Ratings and Reviews
            </p>
            <div className=" flex flex-col items-start w-full mt-8">
              {ratings.map((rating, index) => (
                <div
                  key={index}
                  className=" flex flex-row items-center justify-start w-full mb-2"
                >
                  <div className=" w-9/12 lg:w-[30vw] h-3 flex flex-col items-start rounded-full border-[0.5px]  border-white bg-black">
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
                  className=" flex flex-col lg:flex-row w-full items-start justify-start mb-8"
                >
                  <div className=" w-full lg:w-[15%] flex flex-col items-start">
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

                    <div className=" flex flex-row items-center mt-2 lg:mt-4 justify-start">
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
                  <div className=" w-full lg:w-3/4 flex flex-col mt-2 lg:mt-0 items-start">
                    <p className=" text-white text-sm lg:text-xl">
                      {comment.description}
                    </p>
                    {/* <div className=" flex flex-row justify-start items-center mt-4">
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
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" w-full flex flex-col items-center my-4 lg:my-8">
            <button className=" bg-white text-black border-[1px] rounded-md border-black px-4 lg:w-2/12 py-2 ">
              <p className=" mt-1">{"View More"}</p>
            </button>
          </div>
        </div>
      </div>
      <ProductCTA
        loading={loading}
        handleAddToCart={() => {
          addToCartHandler(selectedProduct);
        }}
        selectedProduct={selectedProduct}
      />
    </div>
  );
};

export default ViewProduct;
