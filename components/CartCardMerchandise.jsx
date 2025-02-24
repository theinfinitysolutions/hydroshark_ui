'use client';
import React from 'react';
import Image from 'next/image';
import { LuMinus, LuPlus } from 'react-icons/lu';
import { MdDeleteOutline } from 'react-icons/md';

const CartCardMerchandise = ({ item, onQuantityChange, onDelete, image, product_title, product_section, quantity }) => {
  const primaryColor = product_section.colors.find((color) => color.product_color.id === item.color);

  return (
    <div className='w-full flex flex-col items-start p-2 lg:p-4 border-[1px] border-black mb-3'>
      <div className='flex flex-row w-full justify-between items-center'>
        <div className='flex flex-col items-start w-[15%] lg:w-[15%] h-[10vh] relative'>
          <Image src={image} alt={product_title} fill style={{ objectFit: 'contain' }} />
        </div>
        <div className='w-[80%] lg:w-[75%] h-full flex flex-col justify-center items-start px-4'>
          <p className='text-xs lg:text-base w-full text-black'>{product_title}</p>
          <div className='flex flex-row justify-between w-full items-center'>
            <div className='flex flex-row justify-start items-center text-xs gap-x-2'>
              <p className='text-red-400 line-through'>₹{product_section.price}</p>
              <p className='text-black'>₹{product_section.discounted_amount}</p>
            </div>
          </div>
          <div className='flex flex-row w-full justify-start gap-x-6 items-center mt-4'>
            <div className='flex flex-row justify-between items-center gap-x-2 py-1 px-2 lg:px-4 border-[1px] border-black'>
              <a onClick={() => onQuantityChange('minus')} className='cursor-pointer text-black text-sm'>
                <LuMinus />
              </a>
              <p className='text-black text-sm mt-1'>{quantity}</p>
              <a onClick={() => onQuantityChange('add')} className='cursor-pointer text-black text-sm'>
                <LuPlus />
              </a>
            </div>
            <div
              style={{ backgroundColor: primaryColor.product_color.color_code }}
              className='h-6 w-6 rounded-full border border-gray-300 shadow-sm'
            />
            <p className='text-gray-800 text-sm py-1 px-3 bg-gray-200 rounded-md shadow-sm'>{product_section.size}</p>
          </div>
        </div>
        <a onClick={() => onDelete()} className='w-[5%] lg:w-[10%] h-full flex flex-col items-center justify-center'>
          <MdDeleteOutline className='text-black text-xl cursor-pointer' />
        </a>
      </div>
    </div>
  );
};

export default CartCardMerchandise;
