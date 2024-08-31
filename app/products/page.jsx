"use client";
import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { testimonials } from "@/utils/consts";
import instance from "@/utils/instance";
import { getUser } from "@/utils/helper";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { EffectCoverflow, Pagination } from "swiper/modules";
import { useStore } from "@/utils/store";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";
import TestimonalsHome from "@/components/TestimonalsHome";
import { textColors } from "@/utils/consts";

const Products = () => {
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

  useEffect(() => {
    console.log("productList", productList);
  }, [productList]);

  return (
    <div className="w-full min-h-screen relative bg-[#f0f2f4] flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className=" flex flex-col items-center w-11/12 z-20 mt-[5vh] lg:mt-[7.5vh] ">
        <h2 className=" text-xl text-[#408289]">Hydroshark Products</h2>
        <p className=" text-[2.5rem] text-center font-bold text-[#181818]">
          {"Hydrate and Gear Up: Your Ultimate Refresh Collection"}
        </p>
      </div>
      <div className=" flex w-11/12 lg:w-10/12 my-[5vh] lg:my-[7.5vh]">
        {loading ? (
          <div className=" w-full h-[40vh] flex flex-col items-center justify-center">
            <Spinner loading={loading} size={48} color="#000000" />
          </div>
        ) : (
          <div className=" w-full flex flex-col lg:flex-row justify-center gap-x-[5vw] items-center ">
            {[...productList].map((product, index) => (
              <div
                className=" w-full lg:w-[35vw] h-[60vh] flex flex-col items-center mb-8 lg:mb-0 relative  border-[1px] border-white  z-0 justify-center"
                key={index}
              >
                <div className=" z-40 absolute  bottom-4 right-4 flex flex-col gap-y-2  ">
                  {product.product_sections.map((section, index) => (
                    <button
                      onClick={() => {
                        updateActiveProduct(section.id, product.id);
                      }}
                      key={index}
                      className={` w-[5vh] h-[5vh] lg:h-[6vh] lg:w-[6vh] cursor-pointer   flex flex-col items-center justify-center rounded-full border-[1px] border-white ${
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
                <div className=" absolute h-[20vh] w-[15vh] lg:w-[20vh] z-10 left-0 -top-[5vh] ">
                  <Image
                    src={process.env.NEXT_PUBLIC_API_URL + "/icon4.png"}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className=" flex z-30 flex-col items-center cursor-pointer justify-center w-full h-[60vh] bg-white  bg-opacity-10">
                  <p className=" z-20 text-[#e3fafc]">{"HYDROSHARK"}</p>
                  <p className="  z-20 text-2xl text-white font-medium">
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
                        src={product?.product_primary_image?.image?.cloudfront}
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
              </div>
            ))}
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

export default Products;
