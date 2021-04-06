import { useState } from "react";
import Seo from "../components/Seo";
import dynamic from "next/dynamic";
import Card from "../components/Card";
import { fetchAPI } from "../lib/api";

const Projects = ({ projects, categories }) => {
  const Layout = dynamic(() => import("../components/Layout"));

  const [categoryId, setCategoryId] = useState(null);

  console.log(setCategoryId);

  // const filterCategory = (catId) => {
  //   {
  //     projects.filter((project) =>
  //       project.categories.some((category) => category.id === catId)
  //     );
  //   }
  // };

  return (
    <>
      <Seo title="Projects" />
      <Layout>
        <div className="container mx-auto">
          {/* <h1 className="text-6xl">Projects</h1> */}
          {/* <div className="py-8">
            {categories.map((category, i) => [
              i > 0 && " / ",
              <button key={i}>{category.name}</button>,
            ])}
          </div> */}
        </div>
        <div className="container mx-auto py-16">
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                projectUrl={project.slug}
                imgUrl={project.image[0].formats.large.url}
                imgAlt={project.image[0].alt}
                title={project.title}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};
export async function getStaticProps() {
  const [projects, categories] = await Promise.all([
    fetchAPI("/projects"),
    fetchAPI("/categories"),
  ]);

  return {
    props: { projects, categories },
    revalidate: 1,
  };
}

export default Projects;
