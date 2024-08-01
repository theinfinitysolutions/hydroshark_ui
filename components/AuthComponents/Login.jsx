"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import OTPInput from "react-otp-input";

const Login = ({ onSignUp }) => {
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex flex-col w-full items-center px-4">
      <div className="text-[1.5rem] font-[500] text-black">Login</div>

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
              setShowOTP(false);
            }}
          >
            Verify
          </button>
        </div>
      ) : (
        <div className=" w-full flex flex-col items-center">
          <button class="px-4 w-full py-2 mt-4 relative border flex flex-row items-center justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
            <img
              className="w-6 h-6 absolute left-2"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span className=" text-black mt-1">Login with Google</span>
          </button>

          <div className=" flex flex-row w-full justify-between items-center mt-4">
            <div className=" h-[1px] w-[45%] bg-black" />
            <div className="text-black text-sm mx-2 mt-1">OR</div>
            <div className=" h-[1px] w-[45%] bg-black" />
          </div>
          <form
            className="flex flex-col w-full items-center mt-4"
            onSubmit={handleSubmit((data) => {
              console.log(data);
              reset();
              setShowOTP(true);
            })}
          >
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="border-[1px] cursor-text border-black text-black  px-2 py-2 w-full rounded-lg"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1 ">
                {errors.email.message}
              </span>
            )}
            {/* <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className="border-[1px] border-black  px-2 py-2 rounded-sm my-2 w-full"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )} */}
            {/* <a href="#" className="text-black text-sm mt-2">
          Forgot Password?
        </a> */}
            <button
              type="submit"
              className="bg-black text-white px-8 py-2 mt-4"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
