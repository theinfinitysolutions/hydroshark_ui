"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";

const inputClass =
  "border-[1px] border-black  px-2 py-2 rounded-lg my-2 w-full text-black cursor-text";

const SignUp = () => {
  const [showConfirm, setShowConfirm] = useState(false);

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
      <div className="text-[1.5rem] font-[500] text-black">SignUp</div>
      {showConfirm ? (
        <div className=" flex flex-row items-center justify-start gap-x-4 px-4 py-2 my-4 rounded-xl w-full border-[1px] border-green-500 ">
          <FaCheckCircle className=" text-green-500 text-[3rem]" />
          <div className=" w-9/12 flex flex-col items-start justify-center">
            <div className="text-green-500 text-lg">
              Confirmation Email Sent
            </div>
            <div className="text-green-500 text-sm">
              Please check your email to verify your account
            </div>
            <a className=" underline text-green-400 text-xs mt-1 cursor-pointer">
              {"Back to Login"}
            </a>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col items-center justify-center w-full">
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
              setShowConfirm(true);
            })}
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
              {...register("phone", { required: "Phone is required" })}
              className={`${inputClass}`}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
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

            <button
              type="submit"
              className="bg-black text-white px-4 py-2 mt-2"
            >
              SignUp
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
