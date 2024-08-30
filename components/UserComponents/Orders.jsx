"use client";
import React, { useState, useEffect } from "react";
import instance from "@/utils/instance";
import Spinner from "../Spinner";
import { useRouter } from "next/navigation";
import { useStore } from "@/utils/store";
import { LuEye } from "react-icons/lu";
import * as dayjs from "dayjs";
import { MdOutlineReviews } from "react-icons/md";

dayjs().format();

const Orders = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const {
    setShowOrderDetailsModal,
    showOrderDetailsModal,
    setShowSubmitReviewModal,
  } = useStore();

  const getOrders = () => {
    setLoading(true);
    instance
      .get("/billing/order/")
      .then((res) => {
        console.log("res", res);
        setOrders(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          router.push("/");
        }
        console.log("err", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className=" w-full flex flex-col items-start">
      {loading ? (
        <div className=" h-[60vh] w-full flex flex-col items-center justify-center">
          {" "}
          <Spinner loading={loading} color="#000000" size={48} />
        </div>
      ) : (
        <div className="w-full flex flex-col items-start">
          <h2 className="text-2xl text-black font-semibold">Orders</h2>
          {orders.length == 0 ? (
            <div className=" flex flex-col items-center justify-center h-[30vh]">
              <p className="text-lg text-black font-semibold">
                No Orders Placed Yet
              </p>
            </div>
          ) : (
            <div className=" flex flex-col items-start max-h-[70vh] overflow-y-scroll mt-4 w-full">
              {orders.map((order, index) => {
                return (
                  <div className=" flex flex-col items-start w-full border-[1px] border-[#c7c7c7]  rounded-md mb-2">
                    <div className=" flex flex-row justify-between items-center w-full  px-4 py-2  ">
                      <div className=" flex flex-row gap-x-8 justify-between items-center">
                        <div className=" flex flex-col items-start">
                          <p className=" text-xs text-black/70">Order ID</p>
                          <p className=" text-base text-black">{`Order# ${order.id}`}</p>
                        </div>

                        <div className=" flex flex-col items-start">
                          <p className=" text-xs text-black/70">Order Date</p>
                          <p className=" text-xs text-black">
                            {dayjs(order.created_at).format(
                              "hh:MM a , DD-MM-YYYY "
                            )}
                          </p>
                        </div>
                      </div>

                      <div className=" flex flex-row items-center gap-x-8">
                        <button
                          onClick={() => {
                            setShowSubmitReviewModal({
                              show: true,
                              id: order.id,
                            });
                          }}
                          className=" flex flex-row justify-start items-center gap-x-4"
                        >
                          <MdOutlineReviews className=" text-xl text-black " />
                          <p className=" text-base text-black">
                            Submit a Review
                          </p>
                        </button>
                        <button
                          onClick={() => {
                            setShowOrderDetailsModal({
                              show: true,
                              id: order.id,
                            });
                          }}
                          className="text-black py-2 rounded-md"
                        >
                          <LuEye className="text-xl" />
                        </button>
                      </div>
                    </div>
                    <div className=" flex flex-row justify-between bg-gray-200 rounded-md items-center w-full py-2  px-4 ">
                      <div className=" flex flex-col items-start">
                        <p className=" text-xs text-black/70">Payment Mode</p>
                        <p className=" text-sm text-black">
                          {order.payment.payment_method || "N/A"}
                        </p>
                      </div>

                      <div className=" flex flex-col items-start">
                        <p className=" text-xs text-black/70">Payment Status</p>
                        <p className=" text-sm text-black px-2 bg-gray-200 rounded-md">
                          {order.payment.payment_status || "N/A"}
                        </p>
                      </div>

                      <div className=" flex flex-col items-start">
                        <p className=" text-xs text-black/70">Order Amount</p>
                        <p className=" text-sm text-black">
                          {order.payment.payment_amount || "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
