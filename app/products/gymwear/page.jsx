"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import instance from "@/utils/instance";
import { getUser } from "@/utils/helper";
import { useStore } from "@/utils/store";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";
import TestimonalsHome from "@/components/TestimonalsHome";

const Gymwear = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = React.useState([]);
  const {
    showProductModal,
    setShowProductModal,
    addToCart,
    cart,
    user,
    setCartSidebar,
  } = useStore();

  useEffect(() => {
    if (!user) getUser();
  }, [user]);

  return (
    <div className="w-full min-h-screen relative bg-[#f0f2f4] flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className=" flex flex-col items-center w-11/12 z-20 mt-[5vh] lg:mt-[7.5vh] ">
        <h2 className=" text-xl text-[#408289]">Hydroshark Gymwear</h2>
        <p className=" text-[2rem] lg:text-[2.5rem] text-center font-bold text-[#181818]">
          {"Energize and Gear Up: Your Ultimate Fitness Collection"}
        </p>
      </div>
      <div className=" flex w-11/12 lg:w-11/12 my-[5vh] lg:my-[7.5vh]">
        {loading ? (
          <div className=" w-full h-[40vh] flex flex-col items-center justify-center">
            <Spinner loading={loading} size={48} color="#000000" />
          </div>
        ) : (
          <div className=" w-full flex flex-col lg:grid lg:grid-cols-3 lg:place-items-center justify-center gap-8 items-center ">
            {productList.length % 3 != 0 && productList.length > 0 ? (
              <div className=" w-full h-[60vh] flex flex-col items-center mb-0 relative  border-[1px] border-white  z-0 justify-center">
                <div className=" absolute w-full h-full z-0 ">
                  <Image
                    src={process.env.NEXT_PUBLIC_API_URL + "/bgasset21.png"}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className=" absolute h-[5vh] w-[20vh] lg:w-[30vh] -right-4 top-0  z-0 ">
                  <Image
                    src={process.env.NEXT_PUBLIC_API_URL + "/icon5.png"}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className=" absolute h-[15vh] w-[15vh] lg:w-[15vh] z-10 left-0 -top-[2.5vh] ">
                  <Image
                    src={process.env.NEXT_PUBLIC_API_URL + "/icon4.png"}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className=" flex z-30 flex-col items-center cursor-pointer justify-center w-full h-[60vh] bg-white  bg-opacity-10">
                  <div className=" h-[20vh] w-[20vh] relative">
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_API_URL + "/hydroshark_logo.png"
                      }
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <p className=" text-white text-3xl text-center w-8/12 mt-8 font-semibold">
                    New Products Coming Soon {productList.length}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
      <TestimonalsHome />
      <div className=" flex flex-col relative h-[30vh] lg:h-[80vh] w-full">
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + "/img11alt.jpeg"}
          fill
          className=" absolute"
        />
      </div>
    </div>
  );
};

export default Gymwear;
