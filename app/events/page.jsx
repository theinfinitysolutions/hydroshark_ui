import React from "react";

const Events = () => {
  return (
    <div className="w-screen min-h-screen overflow-hidden relative bg-[#f0f2f4] flex flex-col justify-center items-center">
      <div className="absolute inset-0 h-full w-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <h2 className=" text-3xl lg:text-[4rem] text-[#181818] mb-[35vh] lg:mb-[20vh] ">
        Coming Soon !
      </h2>
      <p className=" absolute top-[30vh] text-[5rem] md:text-[9rem] lg:text-[14rem] text-black/5 leading-[5rem] lg:leading-[13rem] ">
        HYDROSHARK
      </p>
    </div>
  );
};

export default Events;
