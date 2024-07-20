"use client";
import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
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
      <form
        className="flex flex-col w-full items-center mt-4"
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
      >
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
          className="border-[1px] border-black  px-2 py-2 rounded-sm my-2 w-full"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
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
          type="text"
          placeholder="Phone"
          {...register("phone", { required: "Phone is required" })}
          className="border-[1px] border-black  px-2 py-2 rounded-sm my-2 w-full"
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone.message}</span>
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

        <button type="submit" className="bg-black text-white px-4 py-2 mt-2">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
