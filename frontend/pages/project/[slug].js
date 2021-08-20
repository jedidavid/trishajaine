import { Fragment } from "react";
import Seo from "../../components/Seo";
import dynamic from "next/dynamic";
import { fetchAPI } from "../../lib/api";
import Swiper from "react-id-swiper";
import Image from "next/image";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import { getStrapiMedia } from "../../lib/media";

const Project = ({ project, categories, global }) => {
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
    autoHeight: true,
  };

  return (
    <>
      <Seo title={project.title} />
      <Layout global={global}>
        <div className="container mx-auto md:px-4 px-0">
          <Swiper {...params}>
            {project.image.map((img) => (
              <div key={img.id}>
                <div className="w-full">
                  <Image
                    src={getStrapiMedia(img)}
                    alt={img.alternativeText || img.name}
                    width={1000}
                    height={600}
                    layout="responsive"
                  />
                </div>
              </div>
            ))}
          </Swiper>
        </div>
        <div className="container mx-auto lg:py-32 py-16">
          <div className="w-full mx-auto">
            <div className="flex flex-wrap lg:space-y-8 space-y-4">
              <div className="w-full order-1">
                <h1 className="lg:text-5xl text-4xl">{project.title}</h1>
                <span className="text-base sm:text-lg">
                  {project.categories.map((category, index) => (
                    <Fragment key={index}>{category.name}</Fragment>
                  ))}
                </span>
              </div>
              <div className="lg:w-1/2 w-full lg:order-2 order-3">
                <p className="text-base sm:text-lg">{project.description}</p>
              </div>
              <div className="lg:w-1/2 w-full lg:order-3 order-2">
                <div className="lg:max-w-sm mx-auto">
                  <ul className="text-base sm:text-lg">
                    <li>Size: {project.size}</li>
                    <li>Year: {project.year}</li>
                  </ul>
                </div>
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
  const [projects, categories, global] = await Promise.all([
    await fetchAPI(`/projects?slug=${params.slug}`),
    await fetchAPI(`/categories`),
    await fetchAPI("/global"),
  ]);

  return {
    props: { project: projects[0], categories, global },
    revalidate: 1,
  };
}

export default Project;
