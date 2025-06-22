'use client';
import React, { useRef } from 'react';
import EventCard from './EventCard';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const EventsList = ({ events }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='relative w-full'>
      <div className='absolute left-0 top-1/2 -translate-y-1/2 z-10'>
        <button
          onClick={() => scroll('left')}
          className='p-2 bg-black text-white rounded-full opacity-50 hover:opacity-100 transition-opacity'
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className='absolute right-0 top-1/2 -translate-y-1/2 z-10'>
        <button
          onClick={() => scroll('right')}
          className='p-2 bg-black text-white rounded-full opacity-50 hover:opacity-100 transition-opacity'
        >
          <FaChevronRight />
        </button>
      </div>
      <div ref={scrollContainerRef} className='flex overflow-x-auto hide-scrollbar py-4'>
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsList;
