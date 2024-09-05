"use client";
import React, { useState, useEffect } from "react";
import { useStore } from "@/utils/store";
import { FaCheckCircle, FaLaptopHouse } from "react-icons/fa";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";

const ConfirmModals = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const {
    showConfirmModal,
    setShowConfirmModal,
    setShowLoading,
    setShowRetryPaymentModal,
  } = useStore();
  const [mode, setMode] = useState("success");

  useEffect(() => {
    setIsOpen(showConfirmModal.show);
    setMode(showConfirmModal.mode);
  }, [showConfirmModal.show]);

  const handleClose = () => {
    setShowConfirmModal({
      show: false,
      mode: "",
      successText: "",
      title: "",
      description: "",
      action: "",
      buttonText: "",
    });
  };

  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } z-50 inset-0 flex items-center justify-center bg-black/20`}
    >
      <div className="bg-white w-11/12 lg:w-5/12 relative overflow-y-scroll  flex flex-col items-center justify-center shadow-xl px-[5%] py-[5vh]">
        <div className=" absolute right-4 top-4">
          <button
            onClick={() => {
              handleClose();
              router.push("/");
            }}
          >
            <IoCloseOutline className=" text-black text-xl" />
          </button>
        </div>
        {mode === "success" ? (
          <FaCheckCircle className=" text-green-500 text-5xl" />
        ) : (
          <MdOutlineErrorOutline className=" text-red-500 text-5xl" />
        )}

        <p
          className={`text-3xl ${
            mode == "success" ? "text-green-500" : "text-red-500"
          }  mt-4 font-bold`}
        >
          {showConfirmModal.successText}
        </p>

        <p className="text-black text-base mt-2">
          {showConfirmModal.title ||
            "Your request has been processed successfully"}
        </p>
        {/* {showConfirmModal.description && ( */}
        <p className="text-black text-sm text-center mt-2">
          {showConfirmModal.description ||
            "Your request has been processed successfully Your request has been processed successfullyYour request has been processed successfullyYour request has been processed successfully"}
        </p>
        {/* )} */}

        <button
          onClick={() => {
            handleClose();
            if (
              showConfirmModal.action &&
              showConfirmModal.action != "retry" &&
              showConfirmModal.action != "retryOrder"
            ) {
              router.push(showConfirmModal.action);
            } else if (
              showConfirmModal.action == "retry" ||
              showConfirmModal.action == "retryOrder"
            ) {
              setShowRetryPaymentModal({
                show: true,
                id: showConfirmModal.id,
                type: showConfirmModal.action,
              });
            } else {
              router.push("/");
            }
          }}
          className="w-full py-2 rounded-md bg-white border-[1px] border-black transition-all hover:bg-black hover:text-white text-black mt-8"
        >
          {showConfirmModal.buttonText || "Go back to home"}
        </button>

        <a
          onClick={() => {
            router.push("/contact");
          }}
          className="text-black text-xs mt-4 underline"
        >
          {"For further assistance, please contact our support team"}
        </a>
      </div>
    </div>
  );
};

export default ConfirmModals;
