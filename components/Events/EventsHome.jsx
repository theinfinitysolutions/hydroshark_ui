'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import EventsList from './EventsList';

// Dummy events data
const dummyEvents = [
  {
    title: 'Fitness Workshop',
    date: 'Mar 15',
    description: 'Join us for an intensive fitness workshop with professional trainers and athletes.',
    location: 'Mumbai, India',
    time: '10:00 AM',
    image: '/athlete1.jpeg',
  },
  {
    title: 'Nutrition Seminar',
    date: 'Mar 20',
    description: 'Learn about proper nutrition and hydration for optimal athletic performance.',
    location: 'Delhi, India',
    time: '2:00 PM',
    image: '/athlete2.jpeg',
  },
  {
    title: 'Athlete Meet',
    date: 'Mar 25',
    description: 'Meet and greet with professional athletes and get inspired by their journey.',
    location: 'Bangalore, India',
    time: '11:00 AM',
    image: '/athlete3.jpeg',
  },
  {
    title: 'Training Camp',
    date: 'Apr 1',
    description: 'Two-day intensive training camp focusing on strength and endurance.',
    location: 'Pune, India',
    time: '9:00 AM',
    image: '/athlete4.jpeg',
  },
];

const EventsHome = () => {
  return (
    <div className='min-h-screen w-full bg-[#f0f2f4] flex flex-col lg:flex-row'>
      {/* Left Section */}
      <div className='w-full lg:w-1/2 h-[50vh] lg:h-screen relative bg-black'>
        <div className='absolute inset-0 opacity-50'>
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + '/img8.webp'}
            alt='Events Background'
            fill
            className='object-cover'
          />
        </div>
        <div className='relative z-10 h-full flex flex-col justify-center px-8 lg:px-16'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-white text-6xl lg:text-8xl font-bold mb-6'
          >
            EVENTS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-white/80 text-lg lg:text-xl max-w-xl'
          >
            Join us at our upcoming events where we bring together athletes, fitness enthusiasts, and health experts to
            share knowledge and experiences.
          </motion.p>
        </div>
      </div>

      {/* Right Section */}
      <div className='w-full lg:w-1/2 p-8 lg:p-16 flex flex-col bg-black items-start justify-center'>
        <div className='mb-8'>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='text-4xl font-semibold mb-2'
          >
            Upcoming Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-gray-400'
          >
            Scroll to explore our upcoming events and register to participate
          </motion.p>
        </div>
        <EventsList events={dummyEvents} />
      </div>
    </div>
  );
};

export default EventsHome;
