import React from "react";
import MenuItem from "./MenuItem";
import { GoHomeFill } from "react-icons/go";
import { FaQuestion } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-7.5xl mx-auto">
      <Link href="/" className=" flex gap-1 items-center ">
        {/* Check for sm is needed or not */}
        <Image
          src="/theater.png"
          width={50}
          height={50}
          alt="Logo of the Application"
        />
      </Link>

      <div className="flex gap-4 ">
        <MenuItem title="home" address="/" Icon={GoHomeFill} />
        <MenuItem title="about" address="/about" Icon={FaQuestion} />
      </div>
    </div>
  );
};

export default Header;
