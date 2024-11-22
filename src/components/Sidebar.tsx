import React from 'react';
import {  FaHandHoldingHeart } from 'react-icons/fa';

import Image from 'next/image';
import { GoHome } from 'react-icons/go';

import { HiOutlineLightBulb } from 'react-icons/hi';
import { IoBookOutline } from 'react-icons/io5';
import { PiBatteryPlusVerticalLight, PiChatsCircleDuotone } from 'react-icons/pi';
import { TbCategory2 } from 'react-icons/tb';
import { CiBookmark } from 'react-icons/ci';
import { CgProfile } from "react-icons/cg";


export default function Sidebar() {
  return (
    <div className="">
      {/* Menu bar for larger screens */}
      <div className="hidden md:hidden lg:flex  lg:h-[calc(100vh-50px)] lg:w-[200px] rounded-2xl flex-col container mx-auto justify-around items-center w-16 bg-gray-100 shadow-lg scrollbar overflow-y-scroll py-10">
        {/* Top Icon */}
        <div className="p-2 bg-[#1fa45b] rounded-lg text-white">
          {/* <FaPrayingHands className="text-5xl" /> */}
          <Image src={'/icons/logo.svg'} width={50} height={50} alt='logo'/>
        </div>

        {/* Middle Icons */}
        <div className="space-y-8 py-20">
          <div className='p-4 rounded-full bg-gray-400'>
          <GoHome  className="text-3xl font-bold text-white" />
          </div>
          <div className='p-4 rounded-full bg-gray-400'>
          <HiOutlineLightBulb  className="text-3xl font-bold text-white" />
          </div>
          <div className='p-4 rounded-full bg-gray-400'>
          <IoBookOutline className="text-3xl font-bold text-white" />
          </div>
          <div className='p-4 rounded-full bg-gray-400'>
          <PiBatteryPlusVerticalLight className="text-3xl font-bold text-white" />
          </div>
          <div className='p-4 rounded-full bg-gray-400'>
          <PiChatsCircleDuotone className="text-3xl font-bold text-white" />
          </div>
          <div className='p-4 rounded-full bg-gray-400'>
          <TbCategory2 className="text-3xl font-bold text-white" />
          </div>
          <div className='p-4 rounded-full bg-gray-400'>
          <CiBookmark  className="text-3xl font-bold text-white" />
          </div>
          <div className='p-4 rounded-full bg-gray-400'>
          <CgProfile  className="text-3xl font-bold text-white" />
          </div>
        </div>

        {/* Bottom Icon */}
        <div className="p-2 bg-green-500 rounded-lg text-white">
          <FaHandHoldingHeart className="text-5xl" />
        </div>
      </div>

      {/* Menu bar for smaller screens */}
      <div className="flex z-[1000] lg:hidden justify-around fixed bottom-0 left-0 w-full bg-gray-100 p-4 shadow-lg">
        <GoHome  className="text-gray-500 mx-4 hover:text-green-500" />
      </div>
    </div>
  );
}