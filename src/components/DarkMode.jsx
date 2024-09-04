"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [Changed, setChanged] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => setChanged(true), []);
  return (
    <div>
      {Changed &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="text-2xl cursor-pointer hover:text-orange-500"
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className="text-2xl cursor-pointer hover:text-orange-500"
          />
        ))}
    </div>
  );
}
