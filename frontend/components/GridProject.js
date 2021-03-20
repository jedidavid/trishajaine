import React from "react";
import Image from "next/image";

const GridProject = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap -mx-6">
        <div className="w-1/2 px-6">
          <div className="pt-16 pb-48">
            <h2 className="text-5xl">Projects</h2>
          </div>
          <div className="pb-32">
            <div className="relative h-[550px] mb-2">
              <a href="#">
                <Image
                  src="/1.jpg"
                  alt=""
                  layout="fill"
                  className="rounded-sm base-transition img-transition"
                />
              </a>
            </div>
            <p className="text-base">Commercial</p>
          </div>
          <div className="pb-32">
            <div className="relative h-[550px] mb-2">
              <a href="#">
                <Image
                  src="/3.jpg"
                  alt=""
                  layout="fill"
                  className="rounded-sm base-transition img-transition"
                />
              </a>
            </div>
            <p className="text-base">Concrete</p>
          </div>
        </div>
        <div className="w-1/2 px-6">
          <div className="pb-32">
            <div className="relative h-[550px] mb-2">
              <a href="#">
                <Image
                  src="/2.jpg"
                  alt=""
                  layout="fill"
                  className="rounded-sm base-transition img-transition"
                />
              </a>
            </div>
            <p className="text-base">Green</p>
          </div>
          <div className="pb-32">
            <div className="relative h-[550px] mb-2">
              <a href="#">
                <Image
                  src="/4.jpg"
                  alt=""
                  layout="fill"
                  className="rounded-sm base-transition img-transition"
                />
              </a>
            </div>
            <p className="text-base">Green</p>
          </div>
          <div className="pt-32 text-right">
            <a
              href="#"
              className="font-heading text-4xl leading-none base-transition text-transition"
            >
              View all projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridProject;