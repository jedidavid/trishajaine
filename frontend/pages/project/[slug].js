import React, { Fragment } from "react";
import Seo from "../../components/Seo";
import dynamic from "next/dynamic";
import { fetchAPI } from "../../lib/api";
import Swiper from "react-id-swiper";
import Image from "next/image";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";
const Project = ({ project, categories }) => {
  const Layout = dynamic(() => import("../../components/Layout"));

  SwiperCore.use([Navigation, Autoplay]);
  const params = {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // containerClass: "custom-swiper-container swiper-container",
  };

  return (
    <>
      <Seo title="Project Name" />
      <Layout>
        <div className="container mx-auto">
          <Swiper {...params}>
            {project.image.map((img) => (
              <div key={img.id}>
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + img.url}
                  alt=""
                  layout="fill"
                />
              </div>
            ))}
          </Swiper>
        </div>
        <div className="container mx-auto py-32">
          <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-wrap -mx-8">
              <div className="w-full px-8">
                <h1 className="text-5xl">{project.title}</h1>
                <span>
                  {project.categories.map((category, index) => (
                    <React.Fragment key={index}>{category.name}</React.Fragment>
                  ))}
                </span>
              </div>
              <div className="w-1/2 px-8">
                <p>{project.description}</p>
              </div>
              <div className="w-1/2 px-8">
                <ul>
                  <li>Size: {project.size}</li>
                  <li>Year: {project.year}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const projects = await fetchAPI("/projects");

  return {
    paths: projects.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projects = await fetchAPI(`/projects?slug=${params.slug}`);

  const categories = await fetchAPI(`/categories`);

  return {
    props: { project: projects[0], categories },
    revalidate: 1,
  };
}

export default Project;
