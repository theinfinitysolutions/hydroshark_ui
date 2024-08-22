"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import instance from "@/utils/instance";
import { useRouter } from "next/router";
import { useStore } from "@/utils/store";

const ProductSectionHome = () => {
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
    <div className=" flex flex-col items-center justify-center bg-black  overflow-hidden relative w-full h-[60vh] lg:h-full lg:pt-[5vh] lg:pb-[15vh]">
      <p className=" absolute top-[20vh] text-[5rem] lg:text-[14rem] z-40 text-white/70 leading-[5rem] lg:leading-[13rem]">
        HYDROSHARK
      </p>
      <div className="absolute z-0 inset-0 h-screen -top-[10vh] w-full bg-[linear-gradient(to_right,#ababab55_1px,transparent_1px),linear-gradient(to_bottom,#ababab55_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      {/* <div className=" w-[30vh] h-[30vh] -right-8 -bottom-8 absolute z-0">
        <Image
          src={"/bgasset14.png"}
          fill
          style={{ objectFit: "cover" }}
          alt="hydroshark img carousel"
        />
      </div> */}

      {/* <div className=" w-[10vh] h-[10vh] right-[10vh] animate-rotate top-[10vh] absolute z-0">
        <Image
          src={"/bgasset15.png"}
          fill
          style={{ objectFit: "cover" }}
          alt="hydroshark img carousel"
        />
      </div>

      <div className=" w-[10vh] h-[10vh] left-[10vh] animate-rotate bottom-[10vh] absolute z-0">
        <Image
          src={"/bgasset15.png"}
          fill
          style={{ objectFit: "cover" }}
          alt="hydroshark img carousel"
        />
      </div> */}

      {/* <div className=" flex flex-col items-center w-full z-20">
        <h2 className=" text-base text-[#408289]">Hydroshark Products</h2>
        <p className=" text-[2.5rem] text-center font-bold text-[#181818]">
          {"Hydrate and Gear Up: Your Ultimate Refresh Collection"}
        </p>
      </div> */}
      <div className="flex flex-row justify-center items-center w-full z-40 ">
        {productList.map((product, index) => {
          return (
            <div
              className="w-[35vw] h-[60vh] flex flex-col items-center relative  z-0 justify-center"
              key={index}
            >
              <div className=" flex z-30 flex-col items-center cursor-pointer justify-center w-full h-[60vh] bg-opacity-10">
                <p className=" mt-4 z-20 text-xl text-[#e3fafc]">
                  {"HYDROSHARK"}
                </p>
                <p
                  className={`  z-20 text-3xl ${
                    product?.product_title == "LEMON"
                      ? "text-[#308918]"
                      : "text-[#dfd434]"
                  }  font-medium`}
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
                        product.product_title == "LEMON"
                          ? "/lemoncan.webp"
                          : "/mangocan.webp"
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
                        product.product_sections.product_title == "LEMON"
                          ? "/lemoncan.webp"
                          : "/mangocan.webp",
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
    </div>
  );
};

export default ProductSectionHome;
