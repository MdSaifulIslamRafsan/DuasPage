"use client";

import { useState, FC} from "react";
import { IoSearchSharp } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import SettingsActions from "../settings/SettingsActions ";

const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = (): void => setOpen((prev) => !prev);

  return (
    <div className="flex flex-1 justify-between items-center lg:mt-4 lg:h-20 px-4">
      {/* Logo */}
      <h1 className="text-sm lg:text-3xl font-bold">Duas Page</h1>

      <div className="flex">
        {/* Search Bar */}
        <div className="relative flex items-center justify-between">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="w-40 sm:w-[370px] lg:w-[400px] py-2 text-sm lg:text-lg border-2 lg:px-4 px-3 outline-none rounded-lg"
          />
          <span className="absolute top-0 right-0 flex items-center justify-center w-14 h-full bg-gray-200 text-gray-500 rounded-r-lg">
            <IoSearchSharp />
          </span>
        </div>

        {/* Settings Toggle Icon */}
        {open ? (
          <RxCrossCircled
            onClick={toggle}
            className="cursor-pointer z-50 mr-2"
            size={40}
          />
        ) : (
          <CiSettings
            onClick={toggle}
            className="lg:hidden cursor-pointer z-50 mr-2"
            size={40}
          />
        )}

        {/* Settings Modal (Visible on small screens) */}
        {open && (
          <div className="lg:hidden fixed z-[2000] top-0 left-0 h-screen w-full bg-white border border-black">
            <SettingsActions />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
