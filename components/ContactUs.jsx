"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

let formDiv = "flex flex-col  items-start mb-4";
let input = "w-full p-2 border-gray-300 mt-1 text-black text-md rounded-md";

const ContactUs = () => {
  const [emailSent, setEmailSent] = useState(false);
  const { register, handleSubmit, reset, resetField } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
    <div className="flex flex-col w-full px-0 lg:px-8 py-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full mt-4"
      >
        <div className="flex flex-row w-full justify-between items-center">
          <div className={`${formDiv} w-[47.5%]`}>
            <label htmlFor="name" className="text-sm text-black">
              Name
            </label>
            <input
              className={`${input}`}
              type="text"
              id="name"
              placeholder="Name"
              {...register("name")}
            />
          </div>

          <div className={`${formDiv} w-[47.5%]`}>
            <label htmlFor="query" className="text-sm text-black">
              Query
            </label>
            <input
              className={`${input}`}
              type="text"
              id="query"
              placeholder="Query"
              {...register("query")}
            />
          </div>
        </div>

        <div className={`${formDiv}`}>
          <label htmlFor="email" className="text-sm text-black">
            Email
          </label>
          <input
            className={`${input}`}
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
        </div>

        <div className={`${formDiv}`}>
          <label htmlFor="phonenumber" className="text-sm text-black">
            Phone Number
          </label>
          <input
            className={`${input}`}
            type="phonenumber"
            id="phonenumber"
            placeholder="Phone Number"
            {...register("phoneNumber")}
          />
        </div>

        <div className={`${formDiv}`}>
          <label htmlFor="message" className="text-sm text-black">
            Message
          </label>
          <textarea
            className={`${input}`}
            id="message"
            placeholder="Message"
            {...register("message")}
          />
        </div>

        <div className="flex flex-row justify-end">
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
  );
};

export default ContactUs;
