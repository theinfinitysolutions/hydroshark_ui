import React, { useRef, forwardRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const ParallaxScroll = (props, ref) => {
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "-100%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-80%", "0%"]);

  return (
    <motion.div
      // ref={targetRef}
      className="flex flex-row justify-start h-full w-full"
      style={{ height: "200vh" }}
    >
      <motion.div style={{ y: y }} className=" h-full w-1/2">
        {[1, 2, 3, 1, 4, 3, 4].map((item, index) => {
          return (
            <div key={index} className=" h-[50vh] w-full relative">
              <Image
                src={process.env.NEXT_PUBLIC_API_URL + `/img${item}.webp`}
                layout="fill"
                alt="hydroshark img carousel"
              />
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ y: y2 }} className=" h-full w-1/2">
        {[2, 1, 4, 3, 2, 1, 3].map((item, index) => {
          return (
            <div key={index} className=" h-[50vh] w-full relative">
              <Image
                src={process.env.NEXT_PUBLIC_API_URL + `/img${item}.webp`}
                layout="fill"
                alt="hydroshark img carousel"
              />
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default forwardRef(ParallaxScroll);
