import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";
const GridProject = ({ projects }) => {
  const leftProjectsCount = Math.ceil(projects.length / 2);
  const leftProjects = projects.slice(0, leftProjectsCount);
  const rightProjects = projects.slice(leftProjectsCount, projects.length);

  return (
    <div className="container mx-auto">
      <div className="flex lg:flex-nowrap flex-wrap lg:space-x-16">
        <div className="lg:w-1/2 w-full">
          <div className="lg:pt-16 lg:pb-48 pb-16">
            <h2 className="lg:text-5xl text-4xl">
              <span className="relative pb-2 title-decorator">Projects</span>
            </h2>
          </div>
          {leftProjects.map((project) => (
            <div className="lg:pb-32 pb-12" key={project.id}>
              <Card
                key={project.id}
                projectUrl={project.slug}
                imgUrl={project.image[0].formats.large.url}
                imgAlt={project.image[0].alt}
                title={project.title}
              />
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 w-full">
          {rightProjects.map((project) => (
            <div className="lg:pb-32 pb-12" key={project.id}>
              <Card
                key={project.id}
                projectUrl={project.slug}
                imgUrl={project.image[0].formats.large.url}
                imgAlt={project.image[0].alt}
                title={project.title}
              />
            </div>
          ))}
          <div className="lg:py-16 py-6 text-right">
            <Link href="/projects">
              <a className="font-heading font-semibold lg:text-4xl text-3xl leading-none base-transition text-transition link-transition">
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
