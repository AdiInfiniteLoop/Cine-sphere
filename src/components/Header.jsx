import React from "react";
import MenuItem from "./MenuItem";
import { GoHomeFill } from "react-icons/go";
import { FaQuestion } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md">
      <div className="flex justify-between items-center p-5 max-w-7xl mx-auto">
        <Link href="/" className="flex gap-1 items-center">
          <Image
            className="hover:opacity-80 transition-opacity"
            src="/theater.png"
            width={50}
            height={50}
            alt="Logo of the Application"
          />
          <span className="text-xl font-bold dark:text-white">
            Movie Search
          </span>
        </Link>

        <div className="flex items-center">
          <div className="mr-6">
            <DarkMode />
          </div>
          <div className="flex gap-6">
            <MenuItem title="home" address="/" Icon={GoHomeFill} />
            <MenuItem title="about" address="/about" Icon={FaQuestion} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
