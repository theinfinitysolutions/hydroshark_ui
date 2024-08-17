"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { testimonials } from "@/utils/consts";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { products } from "@/utils/consts";
import { useStore } from "@/utils/store";
import { useRouter } from "next/navigation";

const Products = () => {
  const router = useRouter();
  const { showProductModal, setShowProductModal, addToCart, cart } = useStore();

  return (
    <div className="w-full min-h-screen relative bg-[#f0f2f4] flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className=" flex flex-col items-center w-11/12 z-20 mt-[7.5vh] ">
        <h2 className=" text-xl text-[#408289]">Hydroshark Products</h2>
        <p className=" text-[2.5rem] text-center font-bold text-[#181818]">
          {"Hydrate and Gear Up: Your Ultimate Refresh Collection"}
        </p>
      </div>
      <div className=" flex w-10/12 mt-[7.5vh]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          initialSlide={2}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 250,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow]}
          className="swiper_container"
        >
          {[...products].map((product, index) => (
            <SwiperSlide
              className="w-full h-full flex flex-col items-center  border-[1px] border-white  z-0 justify-center"
              key={index}
            >
              <div className=" absolute w-full h-full z-0 ">
                <Image
                  src={"/bgasset21.png"}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className=" absolute h-[5vh] w-[30vh] -right-4 top-0  z-0 ">
                <Image
                  src={"/icon5.png"}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className=" absolute h-[20vh] w-[20vh] z-10 left-0 -top-[5vh] ">
                <Image src={"/icon4.png"} fill objectFit=" contain" />
              </div>
              <a
                onClick={() => {
                  router.push(`/products/${product.id}`);
                }}
                className=" flex z-30 flex-col items-center cursor-pointer justify-center w-full h-[60vh] bg-white  bg-opacity-10"
              >
                <p className=" z-20 text-[#e3fafc]">{"HYDROSHARK"}</p>
                <p className="  z-20 text-2xl text-white font-medium">
                  {product.title}
                </p>

                <div className="  z-20 flex flex-col items-center justify-center w-full">
                  {product.type === "bottle" ? (
                    <div className=" flex h-[30vh] w-[30vh] relative">
                      <Image
                        src={product.image}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  ) : product.type === "crate" ? (
                    <div className=" flex h-[30vh] w-[50vh] relative">
                      <Image
                        src={product.image}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  ) : product.type === "merch" ? (
                    <div className=" flex h-[30vh] w-[30vh] relative">
                      <Image
                        src={product.image}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  ) : null}

                  <p className=" text-white mt-4">{`₹${product.price} / ${product.quanity}`}</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className=" flex flex-col items-center transition-all duration-200 mt-4 px-6 border-[1px] border-white py-2 bg-transparent text-white hover:bg-white hover:text-black"
                  >
                    <p className=" mt-1">ADD TO CART</p>
                  </button>
                </div>
              </a>
            </SwiperSlide>
          ))}

          {/* <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <iIoMdArrowBack />
            </div>
            <div className="swiper-button-next slider-arrow">
              <IoMdArrowForward />
            </div>
            <div className="swiper-pagination"></div>
          </div> */}
        </Swiper>
      </div>
      <div className=" flex flex-row items-center justify-center w-full mt-[7.5vh] bg-black py-[7.5vh]">
        <div className=" flex flex-col items-start w-[40%]">
          <p className=" text-[4rem] font-bold text-start">
            {"HEAR FROM OUR HYDROSHARK FAMILY"}
          </p>
        </div>
        <div className=" flex flex-col items-start w-[50%]">
          <div className="logos group relative overflow-hidden flex flex-row whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
            <div className="animate-slide-left group-hover:animation-pause flex flex-row  w-full">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-[20vw] h-[20vh] aborder-[0.5px] border-white mr-8 py-4"
                >
                  <div className="flex flex-col items-center text-wrap justify-center w-11/12">
                    <p className="text-white text-sm">
                      {` "${testimonial.description}"`}
                    </p>
                  </div>
                  <div className="flex flex-col items-start  mt-2 justify-center w-11/12">
                    <p className="text-white text-sm">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{ animationDelay: "8s" }}
              className="animate-slide-left group-hover:animation-pause flex flex-row  w-full"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-[20vw] h-[20vh] aborder-[0.5px] border-white mr-8 py-4"
                >
                  <div className="flex flex-col items-start text-wrap justify-center w-11/12">
                    <p className="text-white text-sm -mt-2">
                      {` "${testimonial.description}"`}
                    </p>
                  </div>
                  <div className="flex flex-col items-start  mt-2 justify-center w-11/12">
                    <p className="text-white text-sm">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="animate-slide-left group-hover:animation-pause inline-block w-full">
              <img
                className="mx-4 inline h-16"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                alt="Transistor"
              />
              <img
                className="mx-4 inline h-16"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                alt="Reform"
              />
              <img
                className="mx-4 inline h-16"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                alt="Tuple"
              />
              <img
                className="mx-4 inline h-16"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                alt="SavvyCal"
              />
            </div> */}
          </div>
        </div>
      </div>
      <div className=" flex flex-col relative h-[80vh] w-full">
        <Image src={"/img11alt.jpeg"} fill className=" absolute" />
      </div>
    </div>
  );
};

export default Products;
