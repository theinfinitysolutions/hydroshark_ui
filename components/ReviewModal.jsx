"use client";
import React, { useState, useEffect } from "react";
import { useStore } from "@/utils/store";
import { FaCheckCircle, FaLaptopHouse } from "react-icons/fa";
import { MdOutlineErrorOutline } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/navigation";
import instance from "@/utils/instance";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import Rating from "react-rating";
const ReviewModal = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const { showSubmitReviewModal, setShowSubmitReviewModal } = useStore();

  const submitReview = () => {
    instance
      .post(`/billing/review/`, {
        order: orderId,
        rating: rating,
        review: review,
      })
      .then((res) => {
        console.log("res", res);
        setReviewSubmitted(true);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    setIsOpen(showSubmitReviewModal.show);
    setOrderId(showSubmitReviewModal.id);
  }, [showSubmitReviewModal.show]);

  const handleClose = () => {
    setShowSubmitReviewModal({
      show: false,
      id: "",
    });
    setReviewSubmitted(false);
    setRating(5);
    setReview("");
  };

  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } z-50 inset-0 flex items-center justify-center bg-black/20`}
    >
      <div className="bg-white w-10/12 lg:w-5/12 relative overflow-y-scroll  flex flex-col items-center justify-center shadow-xl px-8 py-[5vh]">
        <button onClick={handleClose} className="absolute top-0 right-0 m-4">
          <MdClose className="text-xl text-black" />
        </button>
        {!reviewSubmitted ? (
          <div className=" w-full flex flex-col items-center">
            <h3 className=" text-black text-2xl">
              Thank you for choosing Hydroshark!
            </h3>
            <p className="text-black text-base"> Please rate your experience</p>
            <div className=" flex w-full mt-4 items-center justify-center">
              <Rating
                emptySymbol={
                  <MdOutlineStarOutline className="text-yellow-500 text-[3rem]" />
                }
                fullSymbol={
                  <MdOutlineStar className="text-yellow-500 text-[3rem]" />
                }
                initialRating={rating}
                onChange={setRating}
              />
            </div>
            <textarea
              className="w-full h-[10rem] mt-4 p-2 border-[1px] border-black rounded-md text-black"
              placeholder="Write a review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />

            <div className=" w-full flex flex-row justify-center">
              <button
                onClick={submitReview}
                className="w-full py-2 rounded-md border border-black bg-black transition-all hover:bg-white hover:text-black text-white mt-8"
              >
                Submit Review
              </button>
            </div>
          </div>
        ) : (
          <div className=" w-full flex flex-col items-center">
            <h3 className=" text-black text-2xl text-center mt-4">
              Thank you for sharing your experience!
            </h3>
            <p className="text-black text-base ">
              {" "}
              We hope to further improve your experience
            </p>
            <div className=" w-full flex flex-row justify-center mt-4">
              <button
                onClick={handleClose}
                className="w-full py-2 rounded-md border border-black bg-black transition-all hover:bg-white hover:text-black text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewModal;
