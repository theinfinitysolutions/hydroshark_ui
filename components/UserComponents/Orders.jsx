"use client";
import React, { useState, useEffect } from "react";
import instance from "@/utils/instance";
import Spinner from "../Spinner";
import { useRouter } from "next/navigation";

const Orders = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

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
            <div className=" flex flex-col items-start w-full">
              {orders.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex flex-col items-start border border-gray-300 bg-gray-10 px-4 py-2 mt-4 rounded-md"
                  >
                    <div className="w-full flex flex-row items-center justify-between mt-1">
                      <p className="text-lg text-black font-semibold">
                        Order ID: {item.id}
                      </p>
                      <p className="text-lg text-black font-semibold">
                        {item.storder_statusatus}
                      </p>
                      <p className="text-lg text-black font-semibold">
                        {item.order_total_amount}
                      </p>
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
