import React from "react";
import { FaLinkedinIn, FaBehance } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-black dark:bg-white">
        <div className="container py-48">
          <div className="flex flex-col items-center justify-center">
            <div>
              <p className="text-white dark:text-black text-sm pb-2">
                Don't be shy. Say hi! &#128075;
              </p>
              <h1 className="text-8xl text-white dark:text-black border-b-2 border-white dark:border-black base-transition text-transition border-transition">
                <a href="#">tj@email.com</a>
              </h1>
            </div>
          </div>
        </div>
        <div className="container py-3">
          <div className="flex flex-wrap">
            <p className="text-sm text-gray-100 dark:text-gray-900">
              &copy; 2021 Trisha Jaine David | All Rights Reserved
            </p>
            <div className="flex flex-wrap ml-auto space-x-8">
              <a
                href="#"
                className="text-white dark:text-black text-2xl base-transition text-transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-white dark:text-black text-2xl base-transition text-transition"
              >
                <FaBehance />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
