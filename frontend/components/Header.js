import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { CgMenuGridO } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";
const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-16 navbar-expand-lg mb-3">
        <div className="w-full px-32 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between">
            <a
              className="text-3xl font-heading font-bold leading-none inline-block mr-4 py-2 whitespace-no-wrap"
              href="#"
            >
              <span className="pl-3">Trisha</span>
              <span className="block leading-none text-lg">David</span>
            </a>
            <button
              className="cursor-pointer text-4xl leading-none p-4 block outline-none focus:outline-none bg-light-black text-white"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {/* <CgMenuGridO></CgMenuGridO> */}
              <HiMenuAlt3 />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            {/* <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-lg font-heading font-medium leading-snug hover:opacity-75"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-lg font-heading font-medium leading-snug hover:opacity-75"
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-lg font-heading font-medium leading-snug hover:opacity-75"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center leading-snug"
                  href="#"
                >
                  <ThemeToggle />
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
