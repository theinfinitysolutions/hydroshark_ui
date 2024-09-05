"use client";
import React, { useState, useEffect } from "react";
import { useStore } from "@/utils/store";
import { FaCheckCircle, FaLaptopHouse } from "react-icons/fa";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";
import { BsWindowFullscreen } from "react-icons/bs";
import Image from "next/image";
import instance from "@/utils/instance";
import Spinner from "./Spinner";

const RetryPaymentModal = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [isOpen, setIsOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState({});
  const {
    showRetryPaymentModal,
    setShowLoading,
    setShowRetryPaymentModal,
    setShowConfirmModal,
  } = useStore();

  const getOrderDetials = (id) => {
    setLoading(true);
    instance
      .get(`/billing/order/${id}/`)
      .then((res) => {
        setOrderDetails(res.data);
        if (res.data.shipping?.id) {
          getShippingDetails(id);
        } else {
          setShippingDetails({});
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });
  };

  const CreatePayment = () => {
    setShowLoading({ show: true });
    instance
      .post("/billing/payment/", {
        payment_method: paymentMethod,
        order: showRetryPaymentModal.id,
      })
      .then((res) => {
        setShowLoading({ show: false });
        if (paymentMethod === "razorpay" && res.data?.razorpay_order_id) {
          processPayment(res.data.razorpay_order_id);
        } else {
          setShowRetryPaymentModal({
            show: false,
            id: "",
            type: "",
          });
          setShowConfirmModal({
            show: true,
            mode: "success",
            successText: "COD Order Placed",
            title: "Your Order has been successfully placed",
            description:
              "You will recieve an email confirmation shortly , please visit the profile section for more details",
            action: "/products",
            buttonText: "Back to products",
            id: showRetryPaymentModal.id,
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
          action: "retry",
          buttonText: "Retry Payment",
          id: showRetryPaymentModal.id,
        });
        setShowRetryPaymentModal({
          show: false,
          id: "",
          type: "",
        });
      });
  };

  const processPayment = async (orderId) => {
    try {
      const options = {
        key: process.env.RAZORPAY_KEY_ID,
        key_id: process.env.RAZORPAY_KEY_ID,
        amount: parseInt(cartObj?.cart_final_amount),
        currency: "INR",
        name: "Hydroshark",
        description: "Test Transaction",
        image: process.env.NEXT_PUBLIC_API_URL + "/hydroshark.png",
        order_id: orderId,
        handler: async function (response) {
          setShowConfirmModal({
            show: true,
            mode: "success",
            successText: "Payment Successful",
            title: "Your Order has been successfully placed",
            description:
              "You order has been successfully placed, you will recieve an email confirmation shortly , please visit the profile section for more details",
            action: "/products",
            buttonText: "Back to products",
          });
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

      const paymentObject = window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error);
      setShowConfirmModal({
        show: true,
        mode: "error",
        successText: "Error",
        title: "Some error has occured",
        description:
          "Some error has occured, Retry payment or contact support for further assistance",
        action: "retry",
        buttonText: "Retry Payment",
        id: orderId,
      });
      setShowRetryPaymentModal({
        show: false,
        id: "",
        type: "",
      });
    }
  };

  useEffect(() => {
    getOrderDetials(54);
  }, [showRetryPaymentModal.id]);

  useEffect(() => {
    setIsOpen(showRetryPaymentModal.show);
  }, [showRetryPaymentModal.show]);

  const handleClose = () => {
    setShowRetryPaymentModal({
      show: false,
      id: "",
      type: "",
    });
  };

  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } z-50 inset-0 flex items-center justify-center bg-black/20`}
    >
      <div className="bg-white w-11/12 lg:w-5/12 relative overflow-y-scroll  flex flex-col items-center justify-center shadow-xl px-8 py-[2.5vh]">
        <div className=" absolute right-4 top-4">
          <button
            onClick={() => {
              handleClose();
            }}
          >
            <IoCloseOutline className=" text-black text-xl" />
          </button>
        </div>
        {loading ? (
          <div className=" h-[50vh] relative flex flex-col items-center justify-center w-full">
            <Spinner loading={loading} color="#000000" size={24} />
          </div>
        ) : (
          <div className="w-full h-full flex flex-col ">
            <div className=" flex flex-row w-full justify-center items-baseline mt-8">
              <p className=" text-2xl text-black font-semibold">
                Retry Payment{" "}
              </p>
            </div>

            <div className=" bg-gray-100  py-2 px-4 rounded-md flex mt-2  flex-row w-full justify-between items-center">
              <p className=" text-base text-black font-semibold">
                Order #{showRetryPaymentModal.id}
              </p>
            </div>

            <div className=" flex flex-col items-start w-full mt-2">
              <div className=" flex flex-row w-full justify-between items-baseline mt-2">
                <p className=" text-base text-black font-semibold">
                  Select Payment Method{" "}
                </p>
              </div>
              <div className=" flex flex-col items-center w-full justify-center mt-1 bg-gray-100 rounded-md">
                <button
                  onClick={() => setPaymentMethod("razorpay")}
                  className={` flex flex-row justify-between w-full py-4 px-2 border-[1px] ${
                    paymentMethod == "razorpay"
                      ? "border-black"
                      : "border-white"
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
                  <div className=" flex flex-row h-[15vh] w-full justify-center gap-x-4 items-center">
                    <BsWindowFullscreen className="text-black text-4xl" />
                    <p className=" text-black text-sm mt-2 w-10/12 text-start">
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
            <div className=" bg-gray-100  py-2 px-4 rounded-md flex mt-2 lg:mt-4 flex-col items-start w-full">
              <p className=" text-base text-black font-semibold">
                Order Summary
              </p>

              <div className=" w-full mt-2 lg:mt-4 flex flex-col items-start">
                <div className="w-full mt-2 flex flex-row items-center justify-between">
                  <p className="text-xs text-black/70">Shipping Charges</p>
                  <p className="text-sm text-black">
                    {orderDetails?.shipping_charges || "N/A"}
                  </p>
                </div>
                <div className="w-full mt-2 flex flex-row items-center justify-between">
                  <p className="text-xs text-black/70">Shipping Discount</p>
                  <p className="text-sm text-black">
                    {orderDetails?.shipping_discount || "N/A"}
                  </p>
                </div>
                <div className="w-full mt-2 flex flex-row items-center justify-between">
                  <p className="text-xs text-black/70">Order Discount</p>
                  <p className="text-sm text-black">
                    {orderDetails.order_discount || "N/A"}
                  </p>
                </div>
                <div className="w-full mt-2 flex flex-row items-center justify-between">
                  <p className="text-xs text-black/70">Order Final Amount</p>
                  <p className="text-sm text-black">
                    {orderDetails.order_final_amount || "N/A"}
                  </p>
                </div>

                <div className="w-full mt-2 flex flex-row items-center justify-between">
                  <p className="text-xs text-black/70">Order Sub Total</p>
                  <p className="text-sm text-black">
                    {orderDetails.order_sub_total || "N/A"}
                  </p>
                </div>
                <div className="w-full mt-2 flex flex-row items-center justify-between">
                  <p className="text-xs text-black/70">Order Total Amount</p>
                  <p className="text-sm text-black">
                    {orderDetails.order_total_amount || "N/A"}
                  </p>
                </div>
                <div className="w-full mt-2 flex flex-row items-center justify-between">
                  <p className="text-xs text-black/70">Order Status</p>
                  <p className="text-sm text-black">
                    {orderDetails.order_status || "N/A"}
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full flex flex-col items-start mt-8 z-20">
              <button
                onClick={() => {
                  if (showRetryPaymentModal.type === "retryOrder") {
                    CreatePayment();
                  } else {
                    processPayment(showRetryPaymentModal.id);
                  }
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
  );
};

export default RetryPaymentModal;
