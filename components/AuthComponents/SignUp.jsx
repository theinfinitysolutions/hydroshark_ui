"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";
import instance from "@/utils/instance";
import Spinner from "../Spinner";

const inputClass =
  "border-[1px] border-black  px-2 py-2 rounded-lg my-2 w-full text-black cursor-text";

const SignUp = ({ BackToLogin }) => {
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      phone_number: "",
    },
  });

  const onSubmit = (data) => {
    setLoading(true);
    instance
      .post("/accounts/signup/", data)
      .then((res) => {
        console.log("res", res);
        setLoading(false);
        setShowConfirm(true);
      })
      .catch((err) => {
        console.log("err", err.response);
        if (Object.keys(err.response.data.response).length > 0) {
          setError(
            err.response.data.response[
              Object.keys(err.response.data.response)[0]
            ]
          );
        }
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col w-full items-center px-4">
      <div className="text-[1.5rem] font-[500] text-black">SignUp</div>
      {showConfirm ? (
        <div className=" flex flex-row items-center justify-start gap-x-4 px-4 py-2 my-4 rounded-xl w-full border-[1px] border-green-500 ">
          <FaCheckCircle className=" text-green-500 text-[3rem]" />
          <div className=" w-9/12 flex flex-col items-start justify-center">
            <div className="text-green-500 text-lg">Sign Up Successful</div>
            <div className="text-green-500 text-sm">
              Please check your email for confirmation and continue to login
            </div>
            <a
              onClick={() => {
                BackToLogin();
              }}
              className=" underline text-green-400 text-sm mt-1 cursor-pointer"
            >
              {"Back to Login"}
            </a>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col items-center justify-center w-full">
          <form
            className="flex flex-col w-full items-center mt-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className={`${inputClass}`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className={`${inputClass}`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
            <input
              type="text"
              placeholder="Phone"
              {...register("phone_number", { required: "Phone is required" })}
              className={`${inputClass}`}
            />
            {errors.phone_number && (
              <span className="text-red-500 text-sm">
                {errors.phone_number.message}
              </span>
            )}

            {error && (
              <span className="text-red-500 text-sm mt-1">{error}</span>
            )}

            <button
              type="submit"
              className="bg-black text-white px-[5vw] py-2 mt-2"
            >
              {loading ? (
                <Spinner loading={loading} size={24} />
              ) : (
                <p className=" mt-1">SignUp</p>
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
