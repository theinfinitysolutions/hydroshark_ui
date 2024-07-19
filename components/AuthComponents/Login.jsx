"use client";
import React from "react";
import { useForm } from "react-hook-form";

const Login = ({ onSignUp }) => {
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
      <form
        className="flex flex-col w-full items-center"
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
      >
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className="border-[1px] border-black  px-2 py-2 rounded-sm my-2 w-full"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className="border-[1px] border-black  px-2 py-2 rounded-sm my-2 w-full"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
        <a href="#" className="text-black text-sm mt-2">
          Forgot Password?
        </a>
        <button type="submit" className="bg-black text-white px-4 py-2 mt-2">
          Login
        </button>

        <p className="text-black mt-4 text-sm">
          Don't have an account?{" "}
          <a
            onClick={() => {
              onSignUp();
            }}
            className="text-[#408289] cursor-pointer"
          >
            SignUp
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
