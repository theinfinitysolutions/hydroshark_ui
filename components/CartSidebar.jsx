// @/components/Layout/Sidebar.js
"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStore } from "@/utils/store";
import { IoMdClose } from "react-icons/io";
import CartCard from "@/components/CartCard";
import instance from "@/utils/instance";
import Spinner from "./Spinner";
import { set } from "react-hook-form";

const className =
  "bg-white w-[80%] md:w-[50%] xl:w-[30%] transition-[margin-right] ease-in-out duration-500 h-full fixed top-0 bottom-0 right-0 z-40 shadow-2xl";

export default function CartSidebar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [show, setter] = useState(false);
  const user = useStore((state) => state.user);
  const cart = useStore((state) => state.cart);
  const { showAuthModal, setShowAuthModal, setShowLoading, activeCart } =
    useStore();
  const addToCart = useStore((state) => state.addToCart);
  const cartSidebar = useStore((state) => state.cartSidebar);
  const setCartSidebar = useStore((state) => state.setCartSidebar);
  const [cartId, setCartId] = useState("");
  const [cartList, setCartList] = useState([]);
  const appendClass = show ? " mr-[0]" : " mr-[-80%] md:mr-[-50%] xl:mr-[-30%]";

  useEffect(() => {
    setter(cartSidebar.show);
  }, [cartSidebar]);

  useEffect(() => {
    if (cartSidebar.show) {
      setLoading(true);
      instance
        .get("/billing/cart/")
        .then((res) => {
          console.log("res", res);
          setCartId(res.data.id);
          setCartList(res.data.cart_items);
          if (res.data.id) {
            if (cart.length > 0) {
              createCartItems();
            } else {
              setLoading(false);
            }
          }
        })
        .catch((err) => {
          console.log("err", err);
          setLoading(false);
        });
    }
  }, [cartSidebar.show]);

  const ModalOverlay = () => (
    <div
      className={`flex fixed top-0 right-0 bottom-0 left-0 bg-transparent z-30`}
      onClick={() => {
        setter((oldVal) => !oldVal);
        setCartSidebar({ show: false });
      }}
    />
  );

  const getCartList = () => {
    setLoading(true);
    instance
      .get("/billing/cart/")
      .then((res) => {
        console.log("res", res);
        setCartId(res.data.id);
        setCartList([...res.data.cart_items]);
        console.log("cartList", cartList, user);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });
  };

  const handleCheckout = () => {
    if (!user) {
      setShowAuthModal({
        show: true,
        message: "Please login to continue to checkout",
      });
      setCartSidebar({
        show: false,
      });
      return;
    }

    if (!cartId) {
      createCartItem("checkout");
      return;
    }

    router.push("/checkout");
    setter((oldVal) => !oldVal);
    setCartSidebar({
      show: false,
    });
  };

  const createCartItems = async (type) => {
    let cartList = [];
    let apiCalls = [];
    cart.map((item) => {
      cartList.push({
        product_section: item.id,
        quantity: item.product_quantity,
      });
      apiCalls.push(
        createCartItem({
          product_section: item.id,
          quantity: item.product_quantity,
        })
      );
    });

    // Wait for all API calls to complete
    const responses = await Promise.all(apiCalls);

    // Process the responses
    responses.forEach((response) => {
      console.log(response.data);
    });

    if (type == "checkout") {
      router.push("/checkout");
      setter((oldVal) => !oldVal);
      setCartSidebar({
        show: false,
      });
    } else {
      getCartList();
    }

    addToCart([]);
    console.log("All API calls completed.");
    setShowLoading({ show: false });
  };

  const createCartItem = (cartItem) => {
    return instance.post(`/billing/cart/item/`, cartItem);
  };

  const handleDelete = (item) => {
    let cartList = [...cart].filter((cartItem) => cartItem.tag !== item.tag);
    addToCart(cartList);
  };

  const patchSectionQuantity = (id, type, quantity) => {
    setLoading(true);
    instance
      .patch(`/billing/cart/item/${id}/`, {
        quantity: type == "add" ? quantity + 1 : quantity - 1,
      })
      .then((res) => {
        console.log("res", res);
        setLoading(false);
        getCartList();
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
      });
  };

  const handleCartQuantityChange = (id, action) => {
    let cartObj = [...cart];

    if (action == "add") {
      cartObj.forEach((item, index) => {
        if (item.id == id) {
          item.product_quantity += 1;
        }
      });
    } else if (action == "minus") {
      cartObj.forEach((item, index) => {
        if (item.id == id && item.product_quantity > 1) {
          item.product_quantity -= 1;
        } else if (item.id == id && item.product_quantity == 1) {
          cartObj.splice(index, 1);
        }
      });
    } else if (action == "delete") {
      cartObj.forEach((item, index) => {
        if (item.id == id) {
          cartObj.splice(index, 1);
        }
      });
    }

    addToCart(cartObj);
  };

  const handleDeleteCartItem = (id) => {
    setLoading(true);
    instance
      .patch(`/billing/cart/item/${id}/`, {
        is_deleted: true,
      })
      .then((res) => {
        setLoading(false);
        console.log("res", res);
        getCartList();
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
      });
  };

  useEffect(() => {
    console.log("cart", cart, activeCart);
  }, [cart]);

  return (
    <>
      <div
        style={{ zIndex: 200 }}
        className={`${className} ${appendClass} z-30`}
      >
        {loading ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Spinner loading={loading} color="#000000" size={48} />
          </div>
        ) : (
          <div className="flex flex-col px-4 md:px-8 h-full items-center">
            <div className="flex flex-row justify-between items-start mt-8 w-full">
              <div className="text-[1.5rem] font-[500] text-black">Cart</div>
              <a
                onClick={() => {
                  setter((oldVal) => !oldVal);
                  setCartSidebar({ show: false });
                }}
                className=" cursor-pointer"
              >
                <IoMdClose className=" text-black" />
              </a>
            </div>
            {!user ? (
              cart.length > 0 ? (
                <div className="flex flex-col mt-4 w-full max-h-[80%] overflow-scroll">
                  {cart.map((item, index) => {
                    return (
                      <CartCard
                        key={index}
                        image={item?.image}
                        product_title={item.linked_product?.product_title}
                        price={item?.price}
                        discounted_amount={item?.discounted_amount}
                        section_title={item.section_title}
                        product_quantity={item.product_quantity}
                        onDelete={() => {
                          handleCartQuantityChange(item.id, "delete");
                        }}
                        onQuantityChange={(type) => {
                          handleCartQuantityChange(item.id, type);
                        }}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <p className="text-black text-xl font-semibold">
                    No items in cart
                  </p>
                </div>
              )
            ) : cartList.length > 0 ? (
              <div className="flex flex-col mt-4 w-full max-h-[80%] overflow-scroll">
                {cartList.map((item, index) => {
                  return (
                    <CartCard
                      key={index}
                      cartItemId={item.id}
                      image={
                        item.product_section?.linked_product
                          ?.product_primary_image?.image?.cloudfront
                      }
                      product_title={
                        item.product_section?.linked_product?.product_title
                      }
                      price={item.product_section?.price + "A"}
                      discounted_amount={
                        item.product_section?.discounted_amount
                      }
                      section_title={item.product_section?.section_title}
                      product_quantity={item.quantity}
                      onDelete={() => {
                        console.log("delete called");
                        handleDeleteCartItem(item.id);
                      }}
                      onQuantityChange={(type) => {
                        patchSectionQuantity(item.id, type, item.quantity);
                      }}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full w-full">
                <p className="text-black text-xl font-semibold">
                  No items in cart
                </p>
              </div>
            )}

            <div className="flex flex-col absolute bottom-8 w-10/12">
              {cartList.length > 0 || cart.length > 0 ? (
                <button
                  onClick={() => {
                    handleCheckout();
                  }}
                  className="w-full py-2 rounded-md bg-white border-[1px] border-black transition-all hover:bg-black hover:text-white text-black mt-4"
                >
                  {loading ? (
                    <Spinner size={24} loading={loading} color="#ffffff" />
                  ) : (
                    "Checkout"
                  )}
                </button>
              ) : null}
            </div>
          </div>
        )}
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
