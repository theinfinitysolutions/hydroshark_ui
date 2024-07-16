"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

let formDiv = "flex flex-col  items-start mb-4";
let input = "w-full p-2 border-gray-300 mt-1 text-black text-md rounded-md";

const ContactUs = () => {
  const [emailSent, setEmailSent] = useState(false);
  const { register, handleSubmit, reset, resetField } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_vb4wq9q",
        "template_1e53gs5",
        {
          from_name: data.name,
          from_query: data.query,
          from_email: data.email,
          from_phone: data.phoneNumber,
          from_message: data.message,
        },
        {
          publicKey: "h789tmXFbcca8_uBo",
        }
      )
      .then((res) => {
        setEmailSent(true);
        reset();
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    if (emailSent) {
      setTimeout(() => {
        setEmailSent(false);
      }, 3000);
    }
  }, [emailSent]);

  return (
    <div className="w-full min-h-screen relative bg-[#f0f2f4] flex flex-col items-center">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className="w-11/12 h-[85vh] z-30 bg-black  mt-[7.5vh] flex flex-row justify-between items-start">
        <div className=" hidden lg:flex w-4/12 h-full  flex-col items-start ">
          <div className=" w-full h-full z-0 relative ">
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/img4.webp"}
              layout="fill"
              alt="hydroshark img4"
            />
          </div>
        </div>
        <div className=" w-full lg:w-7/12 h-full lg:pr-8 flex flex-col items-center lg:items-start justify-center ">
          <h1 className="text-[2.5rem] m-0  text-[#DEE2E6]">Contact Us</h1>
          <p className=" text-base text-[#DEE2E6]">
            {" Please reach out to us for any queries "}
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col z-20 items-center mt-6 px-4 lg:px-0 w-full"
          >
            <div className="flex flex-row w-full justify-between items-center">
              <div className={`${formDiv} w-[47.5%]`}>
                <label htmlFor="name" className=" text-white text-base">
                  Name
                </label>
                <input
                  itemProp="name"
                  className={`${input}`}
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...register("name")}
                />
              </div>

              <div className={`${formDiv} w-[47.5%]`}>
                <label htmlFor="lastname" className=" text-white text-base">
                  Query
                </label>
                <input
                  itemProp="query"
                  className={`${input}`}
                  type="text"
                  id="query"
                  placeholder="query"
                  {...register("query")}
                />
              </div>
            </div>

            <div className={`${formDiv} w-full`}>
              <label htmlFor="email" className=" text-white text-base">
                Email
              </label>
              <input
                itemProp="email"
                className={`${input}`}
                type="email"
                id="email"
                placeholder="Email"
                {...register("email")}
              />
            </div>

            <div className={`${formDiv} w-full`}>
              <label htmlFor="phoneNumber" className=" text-white text-base">
                Phone Number
              </label>
              <input
                itemProp="phoneNumber"
                className={`${input}`}
                type="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                {...register("phoneNumber")}
              />
            </div>

            <div className={`${formDiv} w-full`}>
              <label htmlFor="message" className=" text-white text-base">
                Message
              </label>
              <textarea
                itemProp="message"
                className={`${input}`}
                id="message"
                placeholder="Message"
                {...register("message")}
              />
            </div>

            <div className="flex flex-row justify-end w-full">
              <button
                className={`px-8 py-2  ${
                  emailSent ? "bg-green-600" : "bg-white"
                }  text-[black] rounded-md`}
                type="submit"
              >
                {emailSent ? "Sent" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
