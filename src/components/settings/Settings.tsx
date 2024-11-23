"use client";

import { useState } from "react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import SettingsActions from "./SettingsActions ";


const Settings: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);

  const toggle = (): void => setOpen((prev) => !prev);

  return (
    <div className="lg:mt-4 relative text-center">
      <div className="lg:flex w-full justify-end mb-8">
        <button
          className="lg:flex items-center hidden"
          onClick={toggle}
          aria-label="Toggle Settings"
        >
          <Image
            src="/icons/profile.svg"
            height={60}
            width={60}
            alt="profileImage"
          />
          <FaAngleDown className="border" size={30} />
        </button>
      </div>
      {/* Modal */}
      {open && (
        <div className="hidden lg:block absolute right-0 w-72">
          <SettingsActions />
        </div>
      )}
    </div>
  );
};

export default Settings;
