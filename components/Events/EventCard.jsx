'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const EventCard = ({ event }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className='min-w-[300px] w-[300px] bg-white rounded-lg overflow-hidden shadow-lg mr-6'
    >
      <div className='relative h-[200px] w-full'>
        <Image src={event.image} alt={event.title} fill className='object-cover' />
      </div>
      <div className='p-4'>
        <div className='flex justify-between items-start mb-2'>
          <h3 className='text-lg text-black font-semibold'>{event.title}</h3>
          <span className='text-sm bg-black text-white px-2 py-1 rounded'>{event.date}</span>
        </div>
        <p className='text-gray-600 text-sm mb-3'>{event.description}</p>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-gray-500'>{event.location}</span>
          <span className='text-sm font-medium'>{event.time}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
