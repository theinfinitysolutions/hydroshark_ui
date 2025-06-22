'use client';
import React, { useState } from 'react';
import AthleteCard from './AtheleteCard';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const AthletesHome = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-full relative flex flex-col items-center px-4 lg:px-[2.5vw] py-[7.5vh] bg-[#f0f2f4] overflow-hidden'>
      {/* Background Grid */}
      <div className='absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]'></div>

      {/* Decorative Elements */}
      <motion.div
        className='absolute right-10 top-20 w-20 h-20 opacity-20'
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Image src={process.env.NEXT_PUBLIC_API_URL + '/asset5.png'} alt='decorative' fill className='object-contain' />
      </motion.div>

      <motion.div
        className='absolute left-20 bottom-20 w-16 h-16 opacity-20'
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Image src={process.env.NEXT_PUBLIC_API_URL + '/asset5.png'} alt='decorative' fill className='object-contain' />
      </motion.div>

      {/* Content */}
      <div className='w-full z-30 flex flex-col items-start'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='w-full flex flex-row items-center justify-start gap-x-6 '
        >
          <div className='flex flex-row items-center justify-center relative group'>
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + '/hydroshark.png'}
              width={100}
              height={100}
              alt='Hydroshark logo'
            />
          </div>
          <div className='flex flex-col items-start justify-start'>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-[4rem] font-bold text-black'
            >
              ATHLETES
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='text-gray-600 text-lg'
            >
              Meet the extraordinary athletes who trust Hydroshark for their performance
            </motion.p>
          </div>
        </motion.div>

        {/* Athletes Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='w-full'
        >
          <AthleteCard />
        </motion.div>
      </div>
    </div>
  );
};

export default AthletesHome;
