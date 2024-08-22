"use client";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import OTPInput from "react-otp-input";
import instance from "@/utils/instance";
import { useStore } from "@/utils/store";
import Spinner from "../Spinner";

const Login = ({ onSignUp }) => {
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const { setUser, showAuthModal, setShowAuthModal } = useStore();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = (data) => {
    setLoading(true);
    let obj = {
      phone_number: data.phone,
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
      phone_number: getValues("phone"),
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
        setError(err.response.data.message);
      });
  };

  return (
    <div className="flex flex-col w-full items-center px-4">
      <div className=" w-full flex flex-col justify-center items-center ">
        <p className=" text-[1.5rem] font-[500] text-black">
          {showOTP ? "OTP" : "Login"}
        </p>
        {showAuthModal?.message != "" ? (
          <p className=" text-sm text-black">{showAuthModal.message}</p>
        ) : null}
      </div>

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
        <div className=" w-full flex flex-col items-center">
          <form
            className="flex flex-col w-full items-center mt-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="phone"
              placeholder=" Phone Number"
              {...register("phone", { required: "Phone Number is required" })}
              className="border-[1px] cursor-text border-black text-black  px-2 py-2 w-full rounded-lg"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm mt-1 ">
                {errors.phone.message}
              </span>
            )}
            <button
              type="submit"
              className="bg-black text-white px-8 py-2 mt-4"
            >
              {loading ? (
                <Spinner loading={loading} size={24} color="#ffffff" />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
