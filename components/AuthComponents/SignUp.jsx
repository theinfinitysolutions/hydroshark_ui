"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";
import instance from "@/utils/instance";
import Spinner from "../Spinner";
import OTPInput from "react-otp-input";

const inputClass =
  "border-[1px] border-black  px-2 py-2 rounded-lg my-2 w-full text-black cursor-text";

const SignUp = ({ BackToLogin }) => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
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
        handleLoginRequest(data);
      })
      .catch((err) => {
        console.log("err", err.response);
        if (
          err.response &&
          Object.keys(err.response.data.response).length > 0
        ) {
          setError(
            err.response.data.response[
              Object.keys(err.response.data.response)[0]
            ]
          );
        }
        setLoading(false);
      });
  };

  const handleLoginRequest = (data) => {
    setLoading(true);
    let obj = {
      phone_number: data.phone_number,
    };
    instance
      .post("/accounts/send-otp/", obj)
      .then((res) => {
        console.log("res", res);
        setShowOTP(true);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
        setError(err.response.data.message);
      });
  };

  const handleLogin = () => {
    setLoading(true);
    let obj = {
      phone_number: getValues("phone_number"),
      otp: otp,
    };

    console.log("obj", obj);
    instance
      .post("/accounts/login/", obj)
      .then((res) => {
        console.log("res", res);
        setLoading(false);
        localStorage.setItem("token", res.data.access_token);
        setUser(res.data.user);
        setShowAuthModal({ show: false, message: "" });
        reset();
        setOtp("");
        setShowOTP(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
        if (err.response?.data?.message) {
          setError(err.response.data.message);
        } else {
          setError("Some error has occurred!");
        }
      });
  };

  return (
    <div className="flex flex-col w-full items-center px-4">
      <div className="text-[1.5rem] font-[500] text-black">SignUp</div>
      {showOTP ? (
        <div className=" w-full flex flex-col items-center justify-center mt-4">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputType={"number"}
            placeholder="123456"
            inputStyle={{
              width: "40px",
              height: "40px",
              borderWidth: "1px",
              marginRight: 8,
              textAlign: "center",
              color: "#000000",
            }}
            containerStyle={{}}
            renderInput={(props) => (
              <input
                autoComplete="off"
                aria-label="Please enter OTP character 1"
                className="inputStyle rounded-lg"
                {...props}
              />
            )}
          />

          <button
            className="bg-black text-white px-8 py-2 mt-4"
            onClick={() => {
              handleLogin();
            }}
          >
            {loading ? (
              <Spinner loading={loading} size={24} color="#ffffff" />
            ) : (
              "Verify"
            )}
          </button>
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
              <span className="text-red-500 text-xs">
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
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
            <input
              type="number"
              placeholder="Phone"
              {...register("phone_number", {
                required: "Phone is required",
                minLength: {
                  value: 10,
                  message: "Phone number should be of 10 digits",
                },
                maxLength: {
                  value: 10,
                  message: "Phone number should be of 10 digits",
                },
              })}
              className={`${inputClass}`}
            />
            {errors.phone_number && (
              <span className="text-red-500 text-xs">
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
