import React from "react";
import Image from "next/image";

const GridProject = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-8">
        <div className="w-1/2 px-8">
          <div className="pt-16 pb-48">
            <h2 className="text-5xl">
              <span className="relative pb-2 title-decorator">Projects</span>
            </h2>
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
            <p className="text-xl font-heading font-medium flex items-center">
              <span className="h-1 w-8 bg-blue-600 mr-2"></span> Commercial
            </p>
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
            <p className="text-xl font-heading font-medium flex items-center">
              <span className="h-1 w-8 bg-blue-600 mr-2"></span> Concrete
            </p>
          </div>
        </div>
        <div className="w-1/2 px-8">
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
            <p className="text-xl font-heading font-medium flex items-center">
              <span className="h-1 w-8 bg-blue-600 mr-2"></span> Green
            </p>
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
            <p className="text-xl font-heading font-medium flex items-center">
              <span className="h-1 w-8 bg-blue-600 mr-2"></span> Green
            </p>
          </div>
          <div className="py-16 text-right">
            <a
              href="#"
              className="font-heading font-semibold text-4xl leading-none base-transition text-transition link-transition"
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
