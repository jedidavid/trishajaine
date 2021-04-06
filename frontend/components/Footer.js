import React from "react";
import { FaLinkedinIn, FaBehance, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-black dark:bg-white">
        <div className="container mx-auto lg:py-48 md:py-36 py-24">
          <div className="flex flex-col items-center" id="contact">
            <div>
              <p className="text-white dark:text-black text-sm pb-2">
                Don't be shy. Say hi! &#128075;
              </p>
              <h1 className="lg:text-7xl md:text-5xl sm:text-5xl text-2xl text-white dark:text-black base-transition text-transition link-transition relative">
                <a href="mailto:trishadavidb@gmail.com">
                  trishadavidb@gmail.com
                </a>
              </h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-3">
          <div className="flex flex-wrap justify-center">
            <p className="text-sm text-gray-100 dark:text-gray-900 sm:order-1 order-2">
              &copy; 2021 Trisha Jaine David | All Rights Reserved
            </p>
            <div className="flex flex-wrap ml-auto space-x-8 sm:order-2 order-1 sm:w-auto w-full justify-center sm:pb-0 pb-4">
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
              <a
                href="#"
                className="text-white dark:text-black text-2xl base-transition text-transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
