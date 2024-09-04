import React from "react";
import MenuItem from "./MenuItem";
import { GoHomeFill } from "react-icons/go";
import { FaQuestion } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md">
      <div className="flex justify-between items-center p-6 max-w-8xl mx-auto">
        <Link href="/" className="flex gap-1 items-center ml-2 sm:ml-0">
          <Image
            className="hover:opacity-80 transition-opacity"
            src="/theater.png"
            width={50}
            height={50}
            alt="Logo of the Application"
          />
          <span className="text-2xl font-bold dark:text-white hover:opacity-80 transition-opacity hidden sm:inline-block">
            Cine Sphere
          </span>
        </Link>

        <div className="flex items-center mr-4 sm:mr-2">
          <div className="mr-6 ">
            <DarkMode />
          </div>
          <div className="flex gap-4">
            <MenuItem title="home" address="/" Icon={GoHomeFill} />
            <MenuItem title="about" address="/about" Icon={FaQuestion} />
            <MenuItem
              title="favorites"
              address="/favorites"
              Icon={MdFavorite}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
