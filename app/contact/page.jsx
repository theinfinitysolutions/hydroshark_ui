"use client";
import React from "react";
import Image from "next/image";
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
    <div className="w-full min-h-screen relative bg-[#f0f2f4] flex flex-col items-center">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className="w-11/12 h-[75vh] bg-black  mt-[7.5vh] flex flex-row justify-between items-center">
        <div className=" hidden md:flex w-4/12 h-full  flex-col items-start ">
          <div className=" w-full h-full z-0 relative ">
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/img4.jpeg"}
              layout="fill"
            />
          </div>
        </div>
        <div className=" w-full md:w-7/12 h-full pr-8 flex flex-col items-start justify-center ">
          <h1 className="text-[3rem] leading-[2.5rem] text-[#DEE2E6]">
            Contact Us
          </h1>
          <p className=" text-base text-[#DEE2E6]">
            {" Please reach out to us for any queries "}
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col z-20 w-full mt-8"
          >
            <div className="flex flex-row w-full justify-between items-center">
              <div className={`${formDiv} w-[47.5%]`}>
                <label htmlFor="firstname">Name</label>
                <input
                  className={`${input}`}
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...register("name")}
                />
              </div>

              <div className={`${formDiv} w-[47.5%]`}>
                <label htmlFor="lastname">Query</label>
                <input
                  className={`${input}`}
                  type="text"
                  id="query"
                  placeholder="query"
                  {...register("query")}
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
      </div>
    </div>
  );
};

export default ContactUs;
