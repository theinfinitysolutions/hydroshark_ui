"use client";
import React, { useState, useEffect } from "react";
import instance from "@/utils/instance";
import Spinner from "../Spinner";
import { useRouter } from "next/navigation";
import { useStore } from "@/utils/store";
import { LuEye } from "react-icons/lu";
import * as dayjs from "dayjs";
import { MdOutlineReviews } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

dayjs().format();

const Orders = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const {
    setShowOrderDetailsModal,
    showOrderDetailsModal,
    setShowSubmitReviewModal,
  } = useStore();

  const getOrders = () => {
    setLoading(true);
    instance
      .get(`/billing/order/?page=${page}`)
      .then((res) => {
        console.log("res", res);
        setNext(res.data.next);
        setPrev(res.data.previous);
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
  }, [page]);

  return (
    <div className=" w-full flex flex-col items-start">
      {loading ? (
        <div className=" h-[60vh] w-full flex flex-col items-center justify-center">
          {" "}
          <Spinner loading={loading} color="#000000" size={48} />
        </div>
      ) : (
        <div className="w-full flex flex-col items-start">
          <div className=" flex flex-row justify-between items-center w-full">
            <h2 className="text-2xl text-black font-semibold">Orders</h2>

            {next || prev ? (
              <div className=" flex flex-row items-center justify-center">
                <button
                  onClick={() => setPage(page - 1)}
                  className="text-black py-2 px-2 rounded-md"
                  disabled={prev}
                >
                  <FaChevronLeft />
                </button>
                <page className="text-black px-4 mt-1">{page}</page>
                <button
                  onClick={() => setPage(page + 1)}
                  className="text-black py-2 px-2 rounded-md"
                  disabled={next}
                >
                  <FaChevronRight />
                </button>
              </div>
            ) : null}
          </div>
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
                  <div
                    key={index}
                    className=" flex flex-col items-start w-full border-[1px] border-[#c7c7c7]  rounded-md mb-2"
                  >
                    <div className=" flex flex-col-reverse lg:flex-row justify-between items-center w-full px-4 py-2  ">
                      <div className=" flex flex-row gap-x-8 w-full justify-between items-center">
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

                      <div className=" flex flex-row w-full justify-between lg:justify-end items-center gap-x-8">
                        {order.review?.id ? (
                          <div className=" flex flex-row justify-start gap-x-2">
                            <FaCheckCircle className=" text-green-400" />
                            <p className=" text-base text-green-400">
                              Review Submitted
                            </p>
                          </div>
                        ) : (
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
                        )}

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
