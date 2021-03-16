import React from "react";
import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <HiSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      ) : (
        <HiMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default ThemeToggle;
