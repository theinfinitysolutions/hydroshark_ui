"use client";
import React, { useState, useEffect } from "react";
import { useStore } from "@/utils/store";
import CartCard from "@/components/CartCard";
import { products } from "@/utils/consts";
import Image from "next/image";
import { BsWindowFullscreen } from "react-icons/bs";
import { PiCoinsFill } from "react-icons/pi";
import Razorpay from "razorpay";
import { getUser } from "@/utils/helper";
import { useRouter } from "next/navigation";
import instance from "@/utils/instance";
import Spinner from "@/components/Spinner";
import { IoIosAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { set, useForm } from "react-hook-form";
import Confetti from "react-confetti";
import { create } from "zustand";

const { width, height } = { width: 2400, height: 1200 };

const Checkout = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    cart,
    addToCart,
    user,
    showAddressModal,
    setShowAddressModal,
    setShowLoading,
    showConfirmModal,
    setShowConfirmModal,
    showPrivacyPolicyModal,
    setShowPrivacyPolicyModal,
  } = useStore();
  const [cartObj, setCartObject] = useState({});
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [orderId, setOrderId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [userDetails, setUserDetails] = useState(user);
  const [walletData, setWalletData] = useState({});
  const [addressList, setAddressList] = useState([]);
  const [rzpOrderId, setRzpOrderId] = useState("");
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [addressSelect, setAddressSelect] = useState({
    billingAddress: 0,
    shippingAddress: 0,
  });

  const handleShowConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      phone_number: "",
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser();
    } else {
      router.push("/");
    }
  }, []);

  const getAddressDetails = () => {
    instance
      .get("/accounts/address/")
      .then((res) => {
        setAddressList(res.data);
        console.log("res ADDRESS", res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getCart = () => {
    setCartObject({});
    setLoading(true);
    setOrderId("");
    instance
      .get(`/billing/cart/`)
      .then((res) => {
        setLoading(false);
        console.log("res", res.data);

        setCartObject(res.data);

        if (res.data.cart_items.length == 0) {
          router.push("/products");
        }

        let list = res.data.cart_items.map((item) => {
          return {
            id: item.product_section.id,
            quantity: item.quantity,
          };
        });

        if (list.length > 0) {
          // addToCart
          window.fbq("track", "AddToCart", {
            value: res.data?.cart_final_amount,
            currency: "INR",
            contents: [...list],
            content_ids: "product_title",
            content_type: "product",
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
      });
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
        getCart();
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
      });
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
        getCart();
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
      });
  };

  const getWalletData = () => {
    setLoading(true);
    instance
      .get(`/rewards/wallet/`)
      .then((res) => {
        setWalletData(res.data);
        console.log("wallet data");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    if (!showAddressModal.show) {
      getAddressDetails();
    }
  }, [showAddressModal.show]);

  useEffect(() => {
    if (!showAddressModal.show) {
      getCart();
    }
  }, [showAddressModal.show]);

  useEffect(() => {
    setShowLoading({ show: false });
    getWalletData();
    setOrderId("");
  }, []);

  const CreateOrder = () => {
    if (!addressSelect.shippingAddress || !addressSelect.billingAddress) {
      alert("Please select shipping and billing address");
      return;
    }

    console.log("order id", orderId);

    if (orderId != "") {
      CreatePayment(orderId);
      return;
    }

    setShowLoading({ show: true });
    instance
      .post("/billing/order/", {
        shipping_address: addressSelect.shippingAddress,
        billing_address: addressSelect.billingAddress,
      })
      .then((res) => {
        console.log("res", res);

        setOrderId(res.data.id);
        CreatePayment(res.data.id);
        setShowLoading({ show: false });

        // initiate checkout
        window.fbq("track", "InitiateCheckout", {
          value: cartObj?.cart_final_amount,
          currency: "INR",
        });
      })
      .catch((err) => {
        setShowConfirmModal({
          show: true,
          mode: "error",
          successText: "Error",
          title: "Some error has occured",
          description:
            "Some error has occured, please try again later or contact support",
          action: "/",
          buttonText: "Back to products",
          id: "",
        });
        setShowLoading({ show: false });
        console.log("err", err);
      });
  };

  const CreatePayment = (orderId) => {
    setShowLoading({ show: true });

    if (rzpOrderId != "") {
      processPayment(rzpOrderId);
      return;
    }

    instance
      .post("/billing/payment/", {
        payment_method: paymentMethod,
        order: orderId,
      })
      .then((res) => {
        console.log("res create payment", res);
        setShowLoading({ show: false });
        setRzpOrderId(res.data.razorpay_order_id);
        if (paymentMethod === "razorpay" && res.data?.razorpay_order_id) {
          processPayment(res.data.razorpay_order_id);
        } else {
          handleShowConfetti();
          setShowConfirmModal({
            show: true,
            mode: "success",
            successText: "COD Order Placed",
            title: "Your Order has been successfully placed",
            description:
              "You will recieve an email confirmation shortly , please visit the profile section for more details",
            action: "/products",
            buttonText: "Back to products",
            id: orderId,
          });
        }
      })
      .catch((err) => {
        setShowLoading({ show: false });
        console.log("err", err);
        setShowConfirmModal({
          show: true,
          mode: "error",
          successText: "Error",
          title: "Some error has occured",
          description:
            "Some error has occured, Retry payment or contact support for further assistance",
          action: "retryOrder",
          buttonText: "Retry Payment",
          id: orderId,
        });
      });
  };

  useEffect(() => {
    if (user) {
      setValue("email", user.email);
      setValue("name", user.name);
      setValue("phone_number", user.phone_number);
    }
  }, [user]);

  const processPayment = async (orderId) => {
    setShowLoading({ show: false });
    try {
      console.log("processPayment", orderId);
      const options = {
        key: process.env.RAZORPAY_KEY_ID,
        key_id: process.env.RAZORPAY_KEY_ID,
        amount: parseInt(cartObj?.cart_final_amount),
        currency: "INR",
        name: "Hydroshark",
        description: "Hydroshark Payment ",
        image: process.env.NEXT_PUBLIC_API_URL + "/hydroshark.png",
        order_id: orderId,
        handler: async function (response) {
          console.log("razorpay response", response);
          completePayment(
            response.razorpay_payment_id,
            orderId,
            response.razorpay_signature
          );

          // handleShowConfetti();
          // setOrderId("");
          // setRzpOrderId("");
        },
        prefill: {
          name: user?.name,
          email: user?.email,
          contact: user?.phone_number,
        },
        notes: {
          address:
            "Office #719, ARG Group Road, No-9A, Sikar Road, VKIA Area, Jaipur, Rajasthan, India",
        },
        theme: {
          color: "#181818",
        },
      };

      // console.log("rzp", options);

      const paymentObject = window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        console.log("payment failed", response);
        // setShowConfirmModal({
        //   show: true,
        //   mode: "error",
        //   successText: "Payment Failed",
        //   title: "Payment Failed",
        //   description:
        //     "Payment has failed, Retry payment or contact support for further assistance",
        //   action: "retry",
        //   buttonText: "Retry Payment",
        //   id: orderId,
        // });
        // setOrderId("");
      });
      paymentObject.open();
    } catch (error) {
      console.log("error payemnt", error);
      setShowConfirmModal({
        show: true,
        mode: "error",
        successText: "Error",
        title: "Some error has occured",
        description:
          "Some error has occured, Retry payment or contact support for further assistance",
        action: "retry",
        buttonText: "Retry Payment",
        id: rzpOrderId,
      });
      setOrderId("");
    }
  };

  const completePayment = (paymentId, orderId, signature) => {
    setShowLoading({ show: true });
    instance
      .post("billing/payment/verify/", {
        razorpay_order_id: orderId,
        razorpay_payment_id: paymentId,
        razorpay_signature: signature,
      })
      .then((res) => {
        console.log("res", res);
        setShowConfirmModal({
          show: true,
          mode: "success",
          successText: "Payment Successful",
          title: "Your Order has been successfully placed",
          description:
            "You payment has been , you will recieve an email confirmation shortly , please visit the profile section for more details",
          action: "/products",
          buttonText: "Back to products",
        });
        handleShowConfetti();
        setOrderId("");
        setRzpOrderId("");
        setShowLoading({ show: false });

        // facebook pixel

        let list = res.data.cart_items.map((item) => {
          return {
            id: item.product_section.id,
            quantity: item.quantity,
          };
        });

        if (list.length > 0) {
          // addToCart
          window.fbq("track", "Purchase", {
            value: final_amount,
            currency: "INR",
            contents: [...list],
            content_ids: "product_title",
            content_type: "product",
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
        setShowLoading({ show: false });
        setShowConfirmModal({
          show: true,
          mode: "error",
          successText: "Error",
          title: "Some error has occured",
          description:
            "Some error has occured,contact support for further assistance",
          action: "/",
          buttonText: "Go back to home",
          id: orderId,
        });
      });
  };

  return (
    <div className="w-full min-h-screen relative bg-[#f0f2f4] flex flex-col items-center">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      {showConfetti ? (
        <Confetti width={width} height={height} numberOfPieces={300} />
      ) : null}
      <div className="w-11/12 h-full mt-[2.5vh] flex flex-col items-start">
        <div className=" flex flex-col w-full items-start">
          <p className=" text-[2.5rem] text-[#181818]">Checkout</p>
        </div>
        <div className=" w-full flex h-full flex-col lg:flex-row justify-between mt-4 ">
          <div className=" flex flex-col h-full z-40 bg-white border-[0.5px] p-4 lg:p-8 border-[#c7c7c7]/60 items-start w-full lg:w-1/2">
            <div className=" flex flex-col items-start w-full">
              <div className=" flex flex-row w-full justify-between items-baseline">
                <p className=" text-xl text-black font-semibold">Contact</p>
                {user ? null : (
                  <a className=" text-black underline text-sm">login</a>
                )}
              </div>
              <div className=" border-[1px] border-black  w-full mt-2 rounded-md overflow-hidden">
                <input
                  {...register("email")}
                  placeholder="Email"
                  className=" w-full flex flex-col text-black h-full pl-2 py-2 ring-0 focus:ring-0 focus:outline-none"
                />
              </div>
              {/* 
              <div className=" w-full flex flex-row justify-start items-center gap-x-2 mt-2">
                <input
                  type="checkbox"
                  className=" checked:text-black"
                  checked={false}
                  onChange={() => {}}
                />
                <p className=" text-black text-sm mt-1">
                  Keep me up to date on news and exclusive offers
                </p>
              </div> */}
            </div>

            <div className=" flex flex-col lg:flex-row justify-between items-center w-full mt-[2.5vh]">
              <div className=" flex flex-col items-start w-full lg:w-6/12">
                <div className=" flex flex-row justify-start items-center">
                  <PiCoinsFill className=" hidden lg:block text-2xl text-black" />
                  <h2 className=" text-black text-lg lg:text-xl lg:ml-2">
                    HydroShark Coins
                  </h2>
                </div>
                <p className=" text-black text-xs">
                  {
                    "(You can redeem Hydroshark coins by purchasing Hydroshark Gymwear)"
                  }
                </p>
              </div>

              <div className=" w-full lg:w-1/2 flex flex-row justify-between items-center mt-4 lg:mt-0 lg:flex-col lg:items-end ">
                <div className=" flex flex-row lg:w-3/12 justify-end items-center">
                  <PiCoinsFill className=" text-2xl text-black" />
                  <p className=" text-black text-sm lg:text-lg mt-1">
                    {walletData?.wallet_balance}
                  </p>
                </div>

                <p className=" text-sm text-black">Available Coins</p>
              </div>
            </div>
            <div className=" flex flex-col items-start w-full mt-[5vh]">
              <div className=" flex flex-row w-full justify-between items-baseline">
                <p className=" text-xl text-black font-semibold">
                  Shipping Address
                </p>
              </div>
              {loading ? (
                <div className=" flex flex-col items-center justify-center h-[10vh]  w-full">
                  <Spinner loading={loading} size={24} color="#000000" />
                </div>
              ) : (
                <div className=" flex flex-col items-start w-full mt-4">
                  <div
                    id="address"
                    className=" w-full max-h-[20vh] flex flex-col items-start overflow-y-scroll"
                  >
                    {addressList.map((address, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-row w-full justify-between bg-gray-100 p-4 rounded-lg mb-2"
                        >
                          <div
                            className={` w-1/12 flex flex-col justify-center items-start`}
                          >
                            <input
                              type="radio"
                              onChange={() => {
                                setAddressSelect({
                                  ...addressSelect,
                                  shippingAddress: address.id,
                                });
                              }}
                              checked={
                                addressSelect.shippingAddress == address.id
                              }
                              className=" checked:text-black"
                            />
                          </div>
                          <div className=" w-9/12 flex flex-row text-sm flex-wrap items-start">
                            <p className="  text-black">
                              {address.address_line_1},
                            </p>
                            <p className=" text-black">
                              {address.address_line_2},
                            </p>
                            <p className="  text-black">{` ${address.city}, ${address.state},`}</p>
                            <p className="  text-black">{` ${address.country}, ${address.zipcode}`}</p>
                          </div>
                          <div className=" flex flex-row w-2/12 justify-end items-center gap-x-2">
                            <button
                              onClick={() => {
                                setShowAddressModal({
                                  show: true,
                                });
                              }}
                              className=" text-black"
                            >
                              <MdEdit className=" text-black" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => {
                      setShowAddressModal({
                        show: true,
                      });
                    }}
                    className=" w-full mt-2 bg-gray-100 py-2 gap-x-4 rounded-xl flex flex-row items-center justify-center"
                  >
                    <IoMdAdd className=" text-xl text-black" />
                    <p className=" text-black text-sm mt-1">Add Address</p>
                  </button>
                </div>
              )}
            </div>
            <div className=" flex flex-col items-start w-full mt-[5vh]">
              <div className=" flex flex-row w-full justify-between items-baseline">
                <p className=" text-xl text-black font-semibold">
                  Billing Address
                </p>
              </div>
              {loading ? (
                <div className=" flex flex-col items-center justify-center h-[10vh]  w-full">
                  <Spinner loading={loading} size={24} color="#000000" />
                </div>
              ) : (
                <div className=" flex flex-col items-start w-full mt-4">
                  <div
                    id="address"
                    className=" w-full max-h-[20vh] flex flex-col items-start overflow-y-scroll"
                  >
                    {addressList.map((address, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-row w-full justify-between bg-gray-100 p-4 rounded-lg mb-4"
                        >
                          <div
                            className={` w-1/12 flex flex-col justify-center items-start`}
                          >
                            <input
                              type="radio"
                              onChange={() => {
                                setAddressSelect({
                                  ...addressSelect,
                                  billingAddress: address.id,
                                });
                              }}
                              checked={
                                addressSelect.billingAddress == address.id
                              }
                              className=" checked:text-black"
                            />
                          </div>
                          <div className=" w-10/12 lg:w-9/12 flex flex-row text-sm flex-wrap items-start">
                            <p className="  text-black">
                              {address.address_line_1},
                            </p>
                            <p className=" text-black">
                              {address.address_line_2},
                            </p>
                            <p className="  text-black">{` ${address.city}, ${address.state},`}</p>
                            <p className="  text-black">{` ${address.country}, ${address.zipcode}`}</p>
                          </div>
                          <div className=" flex flex-row w-2/12 justify-end items-center gap-x-2">
                            <button
                              onClick={() => {
                                setShowAddressModal({
                                  show: true,
                                });
                              }}
                              className=" text-black"
                            >
                              <MdEdit className=" text-black" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => {
                      setShowAddressModal({
                        show: true,
                      });
                    }}
                    className=" w-full mt-2 bg-gray-100 py-2 gap-x-4 rounded-xl flex flex-row items-center justify-center"
                  >
                    <IoMdAdd className=" text-xl text-black" />
                    <p className=" text-black text-sm mt-1">Add Address</p>
                  </button>
                </div>
              )}
            </div>
            <div className=" flex flex-col items-start w-full mt-[5vh]">
              <div className=" flex flex-row w-full justify-between items-baseline">
                <p className=" text-xl text-black font-semibold">
                  Payment Method
                </p>
              </div>
              <div className=" flex flex-col items-center w-full justify-center bg-gray-100 mt-4 rounded-md">
                <button
                  onClick={() => setPaymentMethod("razorpay")}
                  className={` flex flex-row justify-between w-full py-4 px-2 border-[1px] ${
                    paymentMethod == "razorpay"
                      ? "border-black"
                      : "border-white bg-gray-300"
                  } `}
                >
                  <div className=" flex flex-row items-end justify-start">
                    <p className="text-sm text-start text-black">
                      {" Razorpay Secure (UPI, Cards, Wallets, NetBanking)"}
                    </p>
                  </div>
                  <div className="w-3/12 flex flex-row  justify-end gap-x-4 ">
                    <div className="h-[3vh] w-3/12 relative">
                      <Image
                        src={process.env.NEXT_PUBLIC_API_URL + "/visalogo.jpg"}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="h-[3vh] w-3/12 relative">
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_API_URL +
                          "/mastercardlogo.jpg"
                        }
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </button>
                {paymentMethod === "razorpay" ? (
                  <div className=" flex flex-col h-[25vh] w-full justify-center items-center">
                    <BsWindowFullscreen className="text-black text-4xl" />
                    <p className=" text-black text-sm mt-2 w-10/12 lg:w-7/12 text-center">
                      {
                        "After clicking “Pay now”, you will be redirected to Razorpay Secure (UPI, Cards, Wallets, NetBanking) to complete your purchase securely."
                      }
                    </p>
                  </div>
                ) : null}

                <button
                  onClick={() => setPaymentMethod("cod")}
                  className={` flex flex-row justify-between w-full py-4 px-2 border-[1px] ${
                    paymentMethod == "cod"
                      ? "border-black"
                      : "border-white bg-gray-300"
                  } `}
                >
                  <div className=" flex flex-row items-end justify-start">
                    <p className="text-sm text-black">
                      {"COD (Cash on Delivery)"}
                    </p>
                  </div>
                </button>
              </div>
            </div>

            <div className=" w-full flex flex-col items-start mt-8 z-20">
              <button
                onClick={() => {
                  CreateOrder();
                }}
                className=" w-full bg-black text-white py-2 cursor-pointer rounded-md border-[1px] border-black group hover:bg-white "
              >
                <p className=" text-base mt-1 text-white transition-all duration-200 group-hover:scale-110 group-hover:text-black">
                  Proceed to pay
                </p>
              </button>
            </div>

            <div className=" flex flex-row items-start mt-8 border-t-[1px] border-black gap-x-4 w-full py-4">
              <a
                onClick={() => {
                  setShowPrivacyPolicyModal({ show: true });
                }}
                className=" text-black text-sm underline cursor-pointer "
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className=" flex flex-col items-start w-full lg:w-1/2 px-[5vw] py-4">
            {loading ? (
              <div className=" flex flex-col items-center justify-center h-[10vh]  w-full">
                <Spinner loading={loading} size={24} color="#000000" />
              </div>
            ) : (
              <div className=" flex flex-col items-start w-full">
                <div className=" flex flex-row w-full justify-between items-baseline">
                  <p className=" text-xl lg:text-2xl text-black font-semibold">
                    Cart
                  </p>
                </div>

                <div className=" w-full flex flex-col items-start h-full overflow-y-scroll mt-4 z-20">
                  {cartObj?.cart_items?.length > 0 ? (
                    <div className="flex flex-col  w-full h-full ">
                      {cartObj?.cart_items?.map((item, index) => {
                        return (
                          <CartCard
                            key={index}
                            cartItemId={item.id}
                            image={
                              item.product_section?.linked_product
                                ?.product_primary_image?.image?.cloudfront
                            }
                            product_title={
                              item.product_section?.linked_product
                                ?.product_title
                            }
                            price={item.product_section?.price}
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
                              patchSectionQuantity(
                                item.id,
                                type,
                                item.quantity
                              );
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
                </div>

                <div className=" w-full flex flex-col items-start mt-4">
                  <div className=" flex flex-row w-full justify-between items-center mt-2">
                    <p className=" text-black text-sm lg:text-lg">Sub total</p>
                    <p className=" text-black text-sm lg:text-lg">
                      ₹{cartObj?.cart_total_price}
                      {/* {cartList.reduce((acc, item) => {
                      return acc + item.price;
                    }, 0)} */}
                    </p>
                  </div>
                  <div className=" flex flex-row w-full justify-between items-center mt-2">
                    <p className=" text-black text-sm lg:text-lg">Discount</p>
                    <p className=" text-black text-sm lg:text-lg">
                      ₹{cartObj?.cart_total_discount_amount}
                      {/* {cartList.reduce((acc, item) => {
                      return acc + item.price;
                    }, 0)} */}
                    </p>
                  </div>
                  <div className=" flex flex-row w-full justify-between items-center mt-2">
                    <p className=" text-black text-sm lg:text-lg">Total</p>
                    <p className=" text-black text-sm lg:text-lg">
                      ₹{cartObj?.cart_final_amount}
                      {/* {cartList.reduce((acc, item) => {
                      return acc + item.price;
                    }, 0)} */}
                    </p>
                  </div>

                  {parseInt(cartObj?.cart_total_price) < 450 ? (
                    <div className=" flex flex-row w-full justify-between items-center mt-2">
                      <p className=" text-black text-sm lg:text-lg">
                        Shipping Charges
                      </p>
                      <p className=" text-black text-sm lg:text-lg">
                        ₹50
                        {/* {cartList.reduce((acc, item) => {
                      return acc + item.price;
                    }, 0)} */}
                      </p>
                    </div>
                  ) : null}

                  <div className=" flex flex-row justify-between items-center w-full mt-2">
                    <p className=" text-black text-sm lg:text-lg">
                      HydroShark Coins
                    </p>

                    <div className=" flex flex-row justify-start items-center">
                      <IoIosAdd className=" text-xl text-green-600" />
                      <h2 className=" text-green-600 text-sm lg:text-lg mt-1">
                        {cartObj?.cart_total_hydroshark_coins}
                      </h2>
                      <PiCoinsFill className=" text-xl text-black ml-2" />
                    </div>
                  </div>
                </div>
                <div className=" w-full flex flex-col items-start mt-4 z-20">
                  <button
                    onClick={() => {
                      CreateOrder();
                    }}
                    className=" w-full bg-black text-white py-2 cursor-pointer rounded-md border-[1px] border-black group hover:bg-white "
                  >
                    <p className=" text-base mt-1 text-white transition-all duration-200 group-hover:scale-110 group-hover:text-black">
                      Proceed to pay
                    </p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
