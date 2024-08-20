"use client";
import React, { useState, useEffect } from "react";
import { useStore } from "@/utils/store";
import CartCard from "@/components/CartCard";
import { products } from "@/utils/consts";
import Image from "next/image";
import { BsWindowFullscreen } from "react-icons/bs";
import { PiCoinsFill } from "react-icons/pi";
import Razorpay from "razorpay";

const Checkout = () => {
  const { cart, addToCart } = useStore();
  const [cartList, setCartList] = useState(cart);
  const [sameAsBilling, setSameAsBilling] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("online");

  const processPayment = async (orderId) => {
    try {
      console.log("processPayment", orderId);
      const options = {
        key: process.env.RAZORPAY_KEY_ID,
        key_id: process.env.RAZORPAY_KEY_ID,
        amount: parseFloat(1200) * 100,
        currency: "INR",
        name: "Hydroshark",
        description: "Test Transaction",
        image: process.env.NEXT_PUBLIC_API_URL + "/hydroshark.png",
        order_id: orderId,
        handler: async function (response) {
          // alert(
          //   response.razorpay_payment_id +
          //     " " +
          //     response.razorpay_order_id +
          //     " " +
          //     response.razorpay_signature
          // );
          console.log("razorpay response", response);
          // completePayment(
          //   response.razorpay_payment_id,
          //   orderId,
          //   response.razorpay_signature
          // );
        },
        prefill: {
          name: "Hydroshark",
          email: "test@hydroshark.in",
          contact: "9876545678",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      console.log("rzp", options);
      setOrderId("");
      const paymentObject = window.Razorpay(options);
      console.log("rzp", paymentObject, options);
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen relative bg-[#f0f2f4] flex flex-col items-center">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className="w-11/12 h-full mt-[2.5vh] flex flex-col items-start">
        <div className=" flex flex-col w-full items-start">
          <p className=" text-[2.5rem] text-[#181818]">Checkout</p>
        </div>
        <div className=" w-full flex h-full flex-row justify-between mt-4 ">
          <div className=" flex flex-col h-full z-40 bg-white border-[0.5px] p-8 border-[#c7c7c7]/60 items-start w-1/2">
            <div className=" flex flex-col items-start w-full">
              <div className=" flex flex-row w-full justify-between items-baseline">
                <p className=" text-xl text-black font-semibold">Contact</p>
                <a className=" text-black underline text-sm">login</a>
              </div>
              <div className=" border-[1px] border-black h-12 w-full mt-4 rounded-md overflow-hidden">
                <input
                  placeholder="Email"
                  className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                />
              </div>

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
              </div>
            </div>

            <div className=" flex flex-row justify-between items-center w-full mt-[5vh]">
              <div className=" flex flex-col items-start w-6/12">
                <div className=" flex flex-row justify-start items-center">
                  <PiCoinsFill className=" text-2xl text-black" />
                  <h2 className=" text-black text-xl ml-2">HydroShark Coins</h2>
                </div>
                <p className=" text-black text-xs">
                  {
                    "(You can redeem HydrodShark coins by pucharsing HydroShark Merchandise)"
                  }
                </p>
              </div>

              <div className=" flex flex-col items-end w-1/2">
                <div className=" flex flex-row w-3/12 justify-end items-center">
                  <PiCoinsFill className=" text-2xl text-black" />
                  <p className=" text-black text-lg mt-1">{"1200"}</p>
                </div>

                <p className=" text-sm text-black">Available Coins</p>
              </div>
            </div>
            <div className=" flex flex-col items-start w-full mt-[5vh]">
              <div className=" flex flex-row w-full justify-between items-baseline">
                <p className=" text-xl text-black font-semibold">Delivery</p>
              </div>
              <div className=" flex flex-col w-full items-start mt-4">
                <div className=" flex flex-row justify-between w-full">
                  <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                    <input
                      placeholder="First Name"
                      className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                    />
                  </div>
                  <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                    <input
                      placeholder="Last Name"
                      className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
                <div className=" border-[1px] border-black h-12 w-full mt-4 rounded-md overflow-hidden">
                  <input
                    placeholder="Address"
                    className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                  />
                </div>
                <div className=" flex flex-row justify-between w-full mt-4">
                  <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                    <input
                      placeholder="City"
                      className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                    />
                  </div>
                  <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                    <input
                      placeholder="State"
                      className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
                <div className=" flex flex-row justify-between w-full mt-4">
                  <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                    <input
                      placeholder="Country"
                      className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                    />
                  </div>
                  <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                    <input
                      placeholder="Zipcode"
                      className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-start w-full mt-[5vh]">
              <div className=" flex flex-row w-full justify-between items-baseline">
                <p className=" text-xl text-black font-semibold">
                  Shipping Method
                </p>
              </div>
              <div className=" flex flex-col items-center w-full justify-center bg-gray-100 py-8 mt-4 rounded-md">
                <p className=" text-[#6b6a6a]">
                  Please select your desired shipping method
                </p>
              </div>
            </div>
            <div className=" flex flex-col items-start w-full mt-[5vh]">
              <div className=" flex flex-row w-full justify-between items-baseline">
                <p className=" text-xl text-black font-semibold">
                  Payment Method
                </p>
              </div>
              <div className=" flex flex-col items-center w-full justify-center bg-gray-100 mt-4 rounded-md">
                <button
                  onClick={() => setPaymentMethod("online")}
                  className={` flex flex-row justify-between w-full py-4 px-2 border-[1px] ${
                    paymentMethod == "online" ? "border-black" : "border-white"
                  } `}
                >
                  <div className=" flex flex-row items-end justify-start">
                    <p className="text-sm text-black">
                      {" Razorpay Secure (UPI, Cards, Wallets, NetBanking)"}
                    </p>
                  </div>
                  <div className="w-3/12 flex flex-row  justify-end gap-x-4 ">
                    <div className="h-[3vh] w-3/12 relative">
                      <Image
                        src={"/visalogo.jpg"}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="h-[3vh] w-3/12 relative">
                      <Image
                        src={"/mastercardlogo.jpg"}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </button>
                {paymentMethod === "online" ? (
                  <div className=" flex flex-col h-[25vh] w-full justify-center items-center">
                    <BsWindowFullscreen className="text-black text-4xl" />
                    <p className=" text-black text-sm mt-2 w-7/12 text-center">
                      {
                        "After clicking “Pay now”, you will be redirected to Razorpay Secure (UPI, Cards, Wallets, NetBanking) to complete your purchase securely."
                      }
                    </p>
                  </div>
                ) : null}

                <button
                  onClick={() => setPaymentMethod("cod")}
                  className={` flex flex-row justify-between w-full py-4 px-2 border-[1px] ${
                    paymentMethod == "cod" ? "border-black" : "border-white"
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
            <div className=" flex flex-col items-start w-full mt-[5vh]">
              <div className=" flex flex-row w-full justify-between items-baseline">
                <p className=" text-xl text-black font-semibold">
                  Shipping Address
                </p>
              </div>

              <div className="flex flex-col items-start w-full mt-4">
                <div
                  className={` w-full p-4 flex flex-row justify-start items-center gap-x-4 ${
                    sameAsBilling
                      ? "bg-white border-[1px] border-black"
                      : "bg-gray-100"
                  }`}
                >
                  <input
                    type="radio"
                    checked={sameAsBilling}
                    onChange={() => setSameAsBilling(!sameAsBilling)}
                    className=" checked:text-black"
                  />
                  <p className=" text-black text-sm mt-1">
                    Same as billing address
                  </p>
                </div>
                <div
                  className={` w-full p-4 flex flex-row justify-start items-center gap-x-4 ${
                    !sameAsBilling
                      ? "bg-white border-[1px] border-black"
                      : "bg-gray-100"
                  }`}
                >
                  <input
                    type="radio"
                    checked={!sameAsBilling}
                    onChange={() => setSameAsBilling(!sameAsBilling)}
                    className=" checked:text-black"
                  />
                  <p className=" text-black text-sm mt-1">
                    Use a different shipping address
                  </p>
                </div>
              </div>
              {!sameAsBilling ? (
                <div className=" flex flex-col items-start w-full justify-center bg-gray-100 p-4 rounded-md">
                  <p className="text-base text-black mt-2">Shipping address</p>
                  <div className=" flex flex-col w-full items-start mt-2">
                    <div className=" flex flex-row justify-between w-full">
                      <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                        <input
                          placeholder="First Name"
                          className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                        />
                      </div>
                      <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                        <input
                          placeholder="Last Name"
                          className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className=" border-[1px] border-black h-12 w-full mt-4 rounded-md overflow-hidden">
                      <input
                        placeholder="Address"
                        className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                      />
                    </div>
                    <div className=" flex flex-row justify-between w-full mt-4">
                      <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                        <input
                          placeholder="City"
                          className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                        />
                      </div>
                      <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                        <input
                          placeholder="State"
                          className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className=" flex flex-row justify-between w-full mt-4">
                      <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                        <input
                          placeholder="Country"
                          className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                        />
                      </div>
                      <div className=" border-[1px] border-black h-12 w-[47.5%] rounded-md overflow-hidden">
                        <input
                          placeholder="Zipcode"
                          className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className=" w-full flex flex-col items-start mt-8 z-20">
              <button className=" w-full bg-black text-white py-2 cursor-pointer rounded-md border-[1px] border-black group hover:bg-white ">
                <p className=" text-base mt-1 text-white transition-all duration-200 group-hover:scale-110 group-hover:text-black">
                  Proceed to pay
                </p>
              </button>
            </div>

            <div className=" flex flex-row items-start mt-8 border-t-[1px] border-black gap-x-4 w-full py-4">
              <a className=" text-black text-sm underline">Refund Policy</a>
              <a className=" text-black text-sm underline">Privacy Policy</a>
            </div>
          </div>
          <div className=" flex flex-col items-start w-1/2 px-[5vw] py-8">
            <div className=" flex flex-col items-start w-full">
              <div className=" flex flex-row w-full justify-between items-baseline">
                <p className=" text-xl text-black font-semibold">Cart</p>
              </div>
              <div className=" w-full flex flex-col items-start mt-4">
                {products.slice(0, 2).map((item, index) => {
                  return (
                    <CartCard
                      key={index}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      image={item.image}
                      onDelete={() => {
                        handleDelete(item);
                      }}
                    />
                  );
                })}
              </div>
              <div className=" flex flex-col items-start w-full z-20">
                <p className=" text-black text-base mt-4">Redeem</p>
                <div className=" w-full flex flex-row justify-between ">
                  <div className=" border-[1px] border-black h-12 w-[75%] rounded-md overflow-hidden">
                    <input
                      value={orderId}
                      onChange={(e) => setOrderId(e.target.value)}
                      placeholder="Redeem"
                      className=" w-full flex flex-col text-black h-full pl-2  ring-0 focus:ring-0 focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={() => {
                      processPayment(orderId);
                    }}
                    className=" w-[20%] py-2 rounded-md bg-black "
                  >
                    <p className=" text-white text-sm mt-1">Apply</p>
                  </button>
                </div>
              </div>
              <div className=" w-full flex flex-col items-start mt-8">
                <div className=" flex flex-row w-full justify-between items-center mt-4">
                  <p className=" text-black text-lg">Sub total</p>
                  <p className=" text-black text-lg">
                    ₹{"1200"}
                    {/* {cartList.reduce((acc, item) => {
                      return acc + item.price;
                    }, 0)} */}
                  </p>
                </div>
                <div className=" flex flex-row w-full justify-between items-center mt-4">
                  <p className=" text-black text-lg">
                    TAX <span className=" text-xs">{"(18%)"}</span>
                  </p>
                  <p className=" text-black text-lg">
                    ₹{"200"}
                    {/* {cartList.reduce((acc, item) => {
                      return acc + item.price;
                    }, 0)} */}
                  </p>
                </div>
                <div className=" flex flex-row w-full justify-between items-center mt-4">
                  <p className=" text-black text-lg">Total</p>
                  <p className=" text-black text-lg">
                    ₹{"1400"}
                    {/* {cartList.reduce((acc, item) => {
                      return acc + item.price;
                    }, 0)} */}
                  </p>
                </div>
              </div>
              <div className=" w-full flex flex-col items-start mt-8 z-20">
                <button className=" w-full bg-black text-white py-2 cursor-pointer rounded-md border-[1px] border-black group hover:bg-white ">
                  <p className=" text-base mt-1 text-white transition-all duration-200 group-hover:scale-110 group-hover:text-black">
                    Proceed to pay
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
