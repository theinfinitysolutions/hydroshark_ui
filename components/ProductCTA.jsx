"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "@/utils/store";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Spinner from "./Spinner";
import instance from "@/utils/instance";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { textColors } from "@/utils/consts";
import { FaSlash } from "react-icons/fa6";

const ProductCTA = () => {
  const {
    showProductModal,
    setShowProductModal,
    addToCart,
    cart,
    user,
    setCartSidebar,
  } = useStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  const updateActiveProduct = (id, productId) => {
    let productListTemp = [...productList];
    productListTemp.forEach((item) => {
      if (item.id == productId) item.activeSection = id;
    }),
      setProductList([...productListTemp]);
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
            ...{
              activeSection: response.data.product_sections.find(
                (item) => item.in_stock
              ).id,
            },
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

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div
      className="w-full flex flex-col items-center justify-center p-8
     bg-white"
    >
      {loading ? (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Spinner loading={loading} color="#000000" size={48} />
        </div>
      ) : (
        <div className=" flex flex-row w-full justify-center ">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="mySwiper w-full h-full "
          >
            {productList.map((product, index) => {
              return (
                <SwiperSlide
                  className="w-[35vw] flex flex-col items-center relative  z-0 justify-center"
                  key={index}
                >
                  <div className=" flex z-30 flex-col lg:flex-row items-center cursor-pointer  justify-center w-full h-[50vh] lg:h-full bg-opacity-10">
                    <p className=" block lg:hidden mt-4 z-20 text-lg text-[#181818]">
                      {"HYDROSHARK"}
                    </p>
                    <p
                      className={`  block lg:hidden z-20 text-2xl text-[${
                        textColors[product.product_title]
                      }]  font-medium`}
                    >
                      {product.product_title}
                    </p>
                    <div className="  z-20 flex flex-col items-center justify-center w-[25vh] lg:w-[15vw]">
                      <a
                        onClick={() => {
                          router.push(`/products/${product.id}`);
                        }}
                        className=" flex h-[35vh] w-[25vh] lg:w-[15vw] relative"
                      >
                        <Image
                          src={
                            product?.product_primary_image?.image?.cloudfront
                          }
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </a>
                    </div>
                    <div className=" flex flex-col items-center lg:w-[40vw] lg:items-start">
                      <p className=" flex flex-wrap gap-x-2 items-end">
                        <span className=" hidden lg:block mt-4 z-20 text-lg text-[#181818]">
                          {"HYDROSHARK"}
                        </span>
                        <span
                          className={`  hidden lg:block z-20 text-lg text-[${
                            textColors[product.product_title]
                          }]  font-medium`}
                        >
                          {product.product_title}
                        </span>
                      </p>
                      <p className=" hidden lg:block mt-2 z-20 text-xs w-full text-[#181818]">
                        {product.product_description}
                      </p>
                      <div className=" flex flex-col lg:flex-row-reverse items-center justify-center lg:items-center lg:gap-x-4">
                        <p className=" text-black mt-4 lg:mt-2">{`₹${
                          product.product_sections.find(
                            (section) => section.id == product.activeSection
                          ).discounted_amount
                        } / ${
                          product.product_sections.find(
                            (section) => section.id == product.activeSection
                          ).section_title
                        }`}</p>

                        <div className=" z-40 gap-x-4 mt-4 lg:mt-2  bottom-4 right-4 flex flex-row justify-between gap-y-2  ">
                          {product.product_sections.map((section, index) => (
                            <button
                              onClick={() => {
                                updateActiveProduct(section.id, product.id);
                              }}
                              key={index}
                              disabled={!section.in_stock}
                              className={` h-[5vh] w-[5vh] cursor-pointer   flex flex-col items-center justify-center rounded-full border-[1px] border-black ${
                                product.activeSection == section.id
                                  ? "bg-black text-white"
                                  : "bg-transparent text-black"
                              } `}
                            >
                              <p className="  font-semibold text-[8px]">
                                {section.section_title}
                              </p>
                              {!section.in_stock && (
                                <FaSlash className=" absolute w-[4vh] h-[4vh] lg:h-[5vh] lg:w-[5vh] text-white/70 " />
                              )}
                            </button>
                          ))}
                        </div>
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
                        className=" flex flex-col items-center transition-all duration-200 mt-4 px-6 border-[1px] border-black py-2 bg-transparent text-black hover:bg-black hover:text-white"
                      >
                        <p className=" mt-1">ADD TO CART</p>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default ProductCTA;
