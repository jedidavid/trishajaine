import React from "react";
import Image from "next/image";
import Link from "next/link";

const GridProject = ({ projects }) => {
  const leftProjectsCount = Math.ceil(projects.length / 2);
  const leftProjects = projects.slice(0, leftProjectsCount);
  const rightProjects = projects.slice(leftProjectsCount, projects.length);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-8">
        <div className="w-1/2 px-8">
          <div className="pt-16 pb-48">
            <h2 className="text-5xl">
              <span className="relative pb-2 title-decorator">Projects</span>
            </h2>
          </div>
          {leftProjects.map((project) => (
            <div className="pb-32" key={project.id}>
              <div className="relative h-[550px] mb-2">
                <Link href={`/project/${project.slug}`}>
                  <a>
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_API_URL + project.image[0].url
                      }
                      alt=""
                      layout="fill"
                      className="rounded-sm base-transition img-transition"
                    />
                  </a>
                </Link>
              </div>
              <p className="text-xl font-heading font-medium flex items-center">
                <span className="h-1 w-8 bg-blue-600 mr-2"></span>
                {project.title}
              </p>
            </div>
          ))}
        </div>
        <div className="w-1/2 px-8">
          {rightProjects.map((project) => (
            <div className="pb-32" key={project.id}>
              <div className="relative h-[550px] mb-2">
                <Link href={`/project/${project.slug}`}>
                  <a>
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_API_URL + project.image[0].url
                      }
                      alt=""
                      layout="fill"
                      className="rounded-sm base-transition img-transition"
                    />
                  </a>
                </Link>
              </div>
              <p className="text-xl font-heading font-medium flex items-center">
                <span className="h-1 w-8 bg-blue-600 mr-2"></span>
                {project.title}
              </p>
            </div>
          ))}
          <div className="py-16 text-right">
            <Link href="/projects">
              <a className="font-heading font-semibold text-4xl leading-none base-transition text-transition link-transition">
                View all projects
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridProject;
