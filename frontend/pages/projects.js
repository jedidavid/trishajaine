import { useState } from "react";
import Seo from "../components/Seo";
import dynamic from "next/dynamic";
import Card from "../components/Card";
import { fetchAPI } from "../lib/api";

const Projects = ({ projects, categories, global }) => {
  const Layout = dynamic(() => import("../components/Layout"));

  const [works, setWorks] = useState(projects);

  const viewAll = () => setWorks(projects);

  const filterProject = (categoryProjects) => {
    setWorks(categoryProjects);
  };

  return (
    <>
      <Seo title="Projects" />
      <Layout global={global}>
        <div className="container mx-auto">
          {/* <h1 className="text-6xl">Projects</h1> */}
          <div className="py-8 text-base lg:text-lg">
            <button
              onClick={() => viewAll()}
              className="base-transition text-transition"
            >
              All
            </button>{" "}
            {" / "}
            {categories.map((category, i) => [
              i > 0 && " / ",
              <button
                key={i}
                onClick={() => filterProject(category.projects)}
                className="base-transition text-transition"
              >
                {category.name}
              </button>,
            ])}
          </div>
        </div>
        <div className="container mx-auto py-16">
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8">
            {works.map((work) => (
              <Card
                key={work.id}
                projectUrl={work.slug}
                imgUrl={work.image[0].formats.large}
                imgAlt={work.image[0].alternativeText || work.title}
                title={work.title}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};
export async function getStaticProps() {
  const [projects, categories, global] = await Promise.all([
    fetchAPI("/projects"),
    fetchAPI("/categories"),
    fetchAPI("/global"),
  ]);

  return {
    props: { projects, categories, global },
    revalidate: 1,
  };
}

export default Projects;
