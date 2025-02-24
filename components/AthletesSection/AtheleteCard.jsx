'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';

const AthleteCard = () => {
  return (
    <div className=' h-full lg:h-[50vh] w-full z-30 flex flex-col lg:flex-row justify-between  items-center bg-gradient-to-r from-[#000000] to-[#243b55]  mt-[5vh]'>
      <div className=' h-full w-full lg:w-[20vw] relative'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className='mySwiper w-full h-full bg-pi'
        >
          {[1, 2, 3, 4, 5].map((item, index) => (
            <SwiperSlide key={index} className=''>
              <div className=' flex flex-col items-start justify-center w-full h-[60vh] lg:h-full'>
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + `/ritesh_bisht_images/ritesh_${index + 1}.webp`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className=' h-full w-full lg:w-[70vw] px-4 py-8 lg:py-0 lg:px-8 flex flex-col items-start justify-center'>
        <h2 className=' text-white text-4xl'>{'Ritesh Singh Bisht’s Collaboration with Hydroshark'}</h2>
        <p className=' text-white text-lg italic '>Boxing</p>

        <p className=' text-white text-base mt-[2.5vh]'>
          {
            "At Hydroshark, we're proud to fuel the journey of Ritesh Singh Bisht, a rising boxing sensation from Wan village, Uttarakhand. Born in 2002, this mountain-raised athlete discovered his passion for boxing at 13, mastering the amateur circuit with over 50 tournaments. In 2023, Ritesh turned pro with Grassroot Boxing, already boasting an impressive 2-0 record with 1 KO."
          }
        </p>
        <p className=' text-white text-base mt-4'>
          {
            "Ritesh's transformation from farm boy to formidable boxer embodies the spirit we celebrate at Hydroshark. Our vitamin-packed, carbonated hydration drink powers his intense training and electrifying fights. Through Ritesh's dynamic social media presence, we're reaching millions, showcasing how Hydroshark drives peak performance for athletes and fitness enthusiasts alike."
          }
        </p>
      </div>
    </div>
  );
};

export default AthleteCard;
