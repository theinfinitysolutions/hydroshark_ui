"use client";
import React from "react";

const ShopNowButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      class="group relative inline-flex h-10 items-center overflow-hidden justify-center rounded-[1.5rem] border-[1px] border-neutral-950 bg-white px-[2rem] font-medium group text-black group-hover:text-white"
    >
      <span class="absolute h-0 w-0 rounded-full bg-black transition-all duration-300 group-hover:h-64 group-hover:w-64"></span>
      <span className=" relative mt-1 group-hover:text-white">SHOP NOW</span>
      <div class="relative ml-1 h-5 w-5 overflow-hidden">
        <div class="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
          >
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fill="#000000"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="fill-black group-hover:fill-white"
            ></path>
          </svg>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 -translate-x-4"
          >
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fill="#000000"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="fill-black group-hover:fill-white"
            ></path>
          </svg>
        </div>
      </div>
    </button>
  );
};

export default ShopNowButton;
