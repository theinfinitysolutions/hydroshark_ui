import React from "react";
import { testimonials } from "@/utils/consts";

const TestimonalsHome = () => {
  return (
    <div className=" flex flex-row items-center justify-center w-full bg-black py-[7.5vh]">
      <div className=" flex flex-col items-start w-[40%]">
        <p className=" text-[4rem] font-bold text-white/80 text-start">
          {"HEAR FROM OUR HYDROSHARK FAMILY"}
        </p>
      </div>
      <div className=" flex flex-col items-start w-[50%]">
        <div className="logos group relative overflow-hidden flex flex-row whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
          <div className="animate-slide-left group-hover:animation-pause flex flex-row  w-full">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-[20vw] h-[20vh] aborder-[0.5px] border-white mr-8 py-4"
              >
                <div className="flex flex-col items-center text-wrap justify-center w-11/12">
                  <p className="text-white text-sm">
                    {` "${testimonial.description}"`}
                  </p>
                </div>
                <div className="flex flex-col items-start  mt-2 justify-center w-11/12">
                  <p className="text-white text-sm">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{ animationDelay: "8s" }}
            className="animate-slide-left group-hover:animation-pause flex flex-row  w-full"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-[20vw] h-[20vh] aborder-[0.5px] border-white mr-8 py-4"
              >
                <div className="flex flex-col items-start text-wrap justify-center w-11/12">
                  <p className="text-white text-sm -mt-2">
                    {` "${testimonial.description}"`}
                  </p>
                </div>
                <div className="flex flex-col items-start  mt-2 justify-center w-11/12">
                  <p className="text-white text-sm">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonalsHome;
