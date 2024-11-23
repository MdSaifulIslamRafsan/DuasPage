import React, { FC } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import Image from "next/image";
import { GoHome } from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoBookOutline } from "react-icons/io5";
import { PiBatteryPlusVerticalLight, PiChatsCircleDuotone } from "react-icons/pi";
import { TbCategory2 } from "react-icons/tb";
import { CiBookmark } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Sidebar: FC = () => {
  return (
    <div className="">
      {/* Menu bar for larger screens */}
      <div className="hidden md:hidden lg:flex lg:h-[calc(100vh-50px)] rounded-2xl flex-col container mx-auto justify-around items-center bg-gray-100 shadow-lg scrollbar overflow-y-scroll py-10 px-4">
        {/* Top Icon */}
        <div className="p-2 bg-[#1fa45b] rounded-lg text-white">
          <Image src="/icons/logo.svg" width={50} height={50} alt="logo" />
        </div>

        {/* Middle Icons */}
        <div className="space-y-8 py-20">
          <div className="p-3 rounded-full bg-gray-400">
            <GoHome className="text-2xl font-bold text-white" />
          </div>
          <div className="p-3 rounded-full bg-gray-400">
            <HiOutlineLightBulb className="text-2xl font-bold text-white" />
          </div>
          <div className="p-3 rounded-full bg-gray-400">
            <IoBookOutline className="text-2xl font-bold text-white" />
          </div>
          <div className="p-3 rounded-full bg-gray-400">
            <PiBatteryPlusVerticalLight className="text-2xl font-bold text-white" />
          </div>
          <div className="p-3 rounded-full bg-gray-400">
            <PiChatsCircleDuotone className="text-2xl font-bold text-white" />
          </div>
          <div className="p-3 rounded-full bg-gray-400">
            <TbCategory2 className="text-2xl font-bold text-white" />
          </div>
          <div className="p-3 rounded-full bg-gray-400">
            <CiBookmark className="text-2xl font-bold text-white" />
          </div>
          <div className="p-3 rounded-full bg-gray-400">
            <CgProfile className="text-2xl font-bold text-white" />
          </div>
        </div>

        {/* Bottom Icon */}
        <div className="p-2 bg-green-500 rounded-lg text-white">
          <FaHandHoldingHeart className="text-5xl" />
        </div>
      </div>

      {/* Menu bar for smaller screens */}
      <div className="flex z-[1000] lg:hidden justify-around fixed bottom-0 left-0 w-full bg-gray-100 p-3 shadow-lg">
        <GoHome className="text-gray-500 hover:text-green-500 text-2xl" />
        <HiOutlineLightBulb className="text-gray-500 hover:text-green-500 text-2xl" />
        <IoBookOutline className="text-gray-500 hover:text-green-500 text-2xl" />
        <PiBatteryPlusVerticalLight className="text-gray-500 hover:text-green-500 text-2xl" />
        <PiChatsCircleDuotone className="text-gray-500 hover:text-green-500 text-2xl" />
        <TbCategory2 className="text-gray-500 hover:text-green-500 text-2xl" />
        <CiBookmark className="text-gray-500 hover:text-green-500 text-2xl" />
        <CgProfile className="text-gray-500 hover:text-green-500 text-2xl" />
      </div>
    </div>
  );
};

export default Sidebar;
