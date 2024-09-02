"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import instance from "@/utils/instance";
import { useRouter } from "next/navigation";
import { useStore } from "@/utils/store";
import ShopNowButton from "./ShopNow";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { RxExternalLink } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { textColors } from "@/utils/consts";

const ProductSectionHome = () => {
  const router = useRouter();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  const { cart, addToCart, cartSidebar, setCartSidebar } = useStore();

  const updateActiveProduct = (id, productId) => {
    let productListTemp = [...productList];
    productListTemp.forEach((item) => {
      if (item.id == productId) item.activeSection = id;
    }),
      console.log("list temp", productListTemp);
    setProductList([...productListTemp]);
  };

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

  const getAllProducts = () => {
    if (productList.length > 0) return;

    setLoading(true);
    instance
      .get("/drinks/product/")
      .then((res) => {
        console.log("res", res.data.results);
        let productIds = res.data.results.map((item) => {
          return item.id;
        });

        console.log("productIds", productIds);
        getProductDataDetailed(productIds);
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
      });
  };

  const getProductDataDetailed = (productIds) => {
    Promise.all(
      productIds.map(async (item) => {
        try {
          let response = await instance.get(`/drinks/product/${item}/`);

          let data = {
            ...response.data,
            ...{ activeSection: response.data.product_sections[0].id },
          };

          if (response) {
            setProductList((productList) => [...productList, data]);
          }
        } catch (err) {
          setLoading(false);
          console.log("err", err);
        }
      })
    ).then(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center bg-black  overflow-hidden relative w-full h-full lg:h-full">
      <div className="absolute z-0 inset-0 h-[200vh] -top-[10vh] w-full bg-[linear-gradient(to_right,#ababab55_1px,transparent_1px),linear-gradient(to_bottom,#ababab55_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className=" flex flex-col lg:flex-row justify-between w-full h-full z-20">
        <div className=" flex flex-col w-full lg:w-4/12 items-center relative lg:items-start justify-center transition-all group">
          <div className="flex flex-col h-[80vh] lg:h-full w-full relative">
            <video
              src={process.env.NEXT_PUBLIC_API_URL + `/hydrosharkvideo${1}.mp4`}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover z-10"
            />
          </div>
          <div className=" h-[50vh] w-full flex flex-col items-center transition-all duration-400  justify-end group-hover:animate-slideUpfast absolute z-40 bottom-0 bg-gradient-to-t from-black/80 to-transparent py-8">
            <h2 className=" text-base lg:text-xl text-center lg:text-start text-[#45dced]">
              Love from the community
            </h2>
            <h2 className=" text-white text-4xl lg:text-[2.5rem] text-center font-semibold  lg:leading-[2.25rem] text-pretty lg:mt-4">
              {"Collaborations with Hydroshark"}
            </h2>
            <div className=" hidden group-hover:flex  flex-col items-center justify-center mt-8">
              <p>Follow us on :</p>
              <div className=" flex flex-row justify-center items-center gap-x-8 mt-4">
                <a
                  href={
                    "https://www.instagram.com/_hydroshark_beverages/?locale=bz-hans&hl=am-et"
                  }
                  target="_blank"
                  className=" cursor-pointer"
                >
                  <FaInstagram className="text-[#DEE2E6] text-xl" />
                </a>
                <a className=" cursor-pointer" onClick={() => {}}>
                  <FaXTwitter className="text-[#DEE2E6] text-xl" />
                </a>

                <a
                  href="https://www.youtube.com/channel/UC3urYQuJgMUJlPYW3hzXbpg"
                  target="_blank"
                  className=" cursor-pointer"
                >
                  <AiOutlineYoutube className="text-[#DEE2E6] text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col-reverse lg:flex-col w-full lg:w-8/12 items-center lg:items-start justify-center ">
          <div className=" flex flex-col items-center lg:items-start justify-center w-full py-8 lg:pl-[5%]">
            <h2 className=" text-lg lg:text-2xl text-center lg:text-start text-[#45dced]">
              Hydroshark Products
            </h2>
            <h2 className=" text-white text-4xl lg:text-[3.5rem] font-semibold text-center lg:text-start lg:leading-[3.25rem] text-pretty lg:mt-4">
              {"GEAR UP FOR NEXT ADVENTURE WITH HYDROSHARK"}
            </h2>
            <div className=" flex flex-col  text-center lg:text-start mt-4">
              <ShopNowButton onClick={() => router.push("/products")} />
            </div>
          </div>
          <div className=" hidden lg:flex flex-row justify-center items-center w-full z-40 relative lg:pl-[5%]">
            {productList.map((product, index) => {
              return (
                <div
                  className="w-[35vw] h-[60vh] flex flex-col items-center relative  z-40 justify-center"
                  key={index}
                >
                  <div className=" flex z-30 flex-col items-center cursor-pointer justify-center w-full h-[60vh] bg-opacity-10">
                    <p className=" mt-4 z-20 text-xl text-[#e3fafc]">
                      {"HYDROSHARK"}
                    </p>
                    <p
                      className={`  z-20 text-3xl text-[${
                        textColors[product.product_title]
                      }]  font-medium`}
                    >
                      {product.product_title}
                    </p>
                    <div className="  z-20 flex flex-col items-center justify-center w-full">
                      <a
                        onClick={() => {
                          router.push(`/products/${product.id}`);
                        }}
                        className=" flex h-[30vh] w-[30vh] relative"
                      >
                        <Image
                          src={
                            product?.product_primary_image?.image?.cloudfront
                          }
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </a>

                      <p className=" text-white mt-4">{`₹${
                        product.product_sections.find(
                          (section) => section.id == product.activeSection
                        ).discounted_amount
                      } / ${
                        product.product_sections.find(
                          (section) => section.id == product.activeSection
                        ).section_title
                      }`}</p>
                    </div>

                    <div className=" z-40 gap-x-4 mt-4  bottom-4 right-4 flex flex-row justify-between gap-y-2  ">
                      {product.product_sections.map((section, index) => (
                        <button
                          onClick={() => {
                            updateActiveProduct(section.id, product.id);
                          }}
                          key={index}
                          className={` h-[6vh] w-[6vh] cursor-pointer   flex flex-col items-center justify-center rounded-full border-[1px] border-white ${
                            product.activeSection == section.id
                              ? "bg-white text-black"
                              : "bg-transparent text-white"
                          } `}
                        >
                          <p className="  font-semibold text-[10px]">
                            {section.section_title}
                          </p>
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        let obj = {
                          ...product.product_sections.find(
                            (item) => item.id == product.activeSection
                          ),
                          product_title: product.product_title,
                          image:
                            product?.product_primary_image?.image?.cloudfront,
                          product_quantity: 1,
                        };

                        addToCartHandler(obj);
                      }}
                      className=" flex flex-col items-center transition-all duration-200 mt-4 px-6 border-[1px] border-white py-2 bg-transparent text-white hover:bg-white hover:text-black"
                    >
                      <p className=" mt-1">ADD TO CART</p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" flex lg:hidden flex-col w-full items-center justify-center py-8">
            <div className="h-[60vh] w-11/12 lg:w-9/12 bg-white rounded-3xl flex flex-row relative ">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay]}
                className="mySwiper w-full h-full bg-pi"
              >
                {productList.map((product, index) => {
                  return (
                    <SwiperSlide
                      className="w-[35vw] h-[0vh] flex flex-col items-center relative  z-0 justify-center"
                      key={index}
                    >
                      <div className=" flex z-30 flex-col items-center cursor-pointer justify-center w-full h-[60vh] bg-opacity-10">
                        <p className=" mt-4 z-20 text-lg text-[#181818]">
                          {"HYDROSHARK"}
                        </p>
                        <p
                          className={`  z-20 text-2xl text-[${
                            textColors[product.product_title]
                          }]  font-medium`}
                        >
                          {product.product_title}
                        </p>
                        <div className="  z-20 flex flex-col items-center justify-center w-full">
                          <a
                            onClick={() => {
                              router.push(`/products/${product.id}`);
                            }}
                            className=" flex h-[25vh] w-[25vh] relative"
                          >
                            <Image
                              src={
                                product?.product_primary_image?.image
                                  ?.cloudfront
                              }
                              fill
                              style={{ objectFit: "contain" }}
                            />
                          </a>

                          <p className=" text-black mt-4">{`₹${
                            product.product_sections.find(
                              (section) => section.id == product.activeSection
                            ).discounted_amount
                          } / ${
                            product.product_sections.find(
                              (section) => section.id == product.activeSection
                            ).section_title
                          }`}</p>
                        </div>

                        <div className=" z-40 gap-x-4 mt-4  bottom-4 right-4 flex flex-row justify-between gap-y-2  ">
                          {product.product_sections.map((section, index) => (
                            <button
                              onClick={() => {
                                updateActiveProduct(section.id, product.id);
                              }}
                              key={index}
                              className={` h-[5vh] w-[5vh] cursor-pointer   flex flex-col items-center justify-center rounded-full border-[1px] border-black ${
                                product.activeSection == section.id
                                  ? "bg-black text-white"
                                  : "bg-transparent text-black"
                              } `}
                            >
                              <p className="  font-semibold text-[8px]">
                                {section.section_title}
                              </p>
                            </button>
                          ))}
                        </div>

                        <button
                          onClick={() => {
                            let obj = {
                              ...product.product_sections.find(
                                (item) => item.id == product.activeSection
                              ),
                              product_title: product.product_title,
                              image:
                                product?.product_primary_image?.image
                                  ?.cloudfront,
                              product_quantity: 1,
                            };

                            addToCartHandler(obj);
                          }}
                          className=" flex flex-col items-center transition-all duration-200 mt-4 px-6 border-[1px] border-black py-2 bg-transparent text-black hover:bg-black hover:text-white"
                        >
                          <p className=" mt-1">ADD TO CART</p>
                        </button>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionHome;
