"use client";
import React from "react";
import { useForm } from "react-hook-form";

let formDiv = "flex flex-col  items-start mb-4";
let input = "w-full p-2 border-gray-300 mt-1 text-black text-md rounded-md";

const ContactUs = () => {
  const { register, handleSubmit, reset, resetField } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col w-full px-0 lg:px-8 py-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full mt-4"
      >
        <div className="flex flex-row w-full justify-between items-center">
          <div className={`${formDiv} w-[47.5%]`}>
            <label htmlFor="firstname">First Name</label>
            <input
              className={`${input}`}
              type="text"
              id="firstname"
              placeholder="First Name"
              {...register("firstname")}
            />
          </div>

          <div className={`${formDiv} w-[47.5%]`}>
            <label htmlFor="lastname">Last Name</label>
            <input
              className={`${input}`}
              type="text"
              id="lastname"
              placeholder="Last Name"
              {...register("lastname")}
            />
          </div>
        </div>

        <div className={`${formDiv}`}>
          <label htmlFor="email">Email</label>
          <input
            className={`${input}`}
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
        </div>

        <div className={`${formDiv}`}>
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            className={`${input}`}
            type="phonenumber"
            id="phonenumber"
            placeholder="Phone Number"
            {...register("phoneNumber")}
          />
        </div>

        <div className={`${formDiv}`}>
          <label htmlFor="message">Message</label>
          <textarea
            className={`${input}`}
            id="message"
            placeholder="Message"
            {...register("message")}
          />
        </div>

        <div className="flex flex-row justify-end">
          <button
            className="px-8 py-2 bg-white text-[black] rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
