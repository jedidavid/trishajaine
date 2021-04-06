import GridProject from "../components/GridProject";
import Seo from "../components/Seo";
import dynamic from "next/dynamic";
import About from "../components/About";
import HomeSwiper from "../components/HomeSwiper";
import { fetchAPI } from "../lib/api";

const Home = ({ gallery, projects, about }) => {
  if (typeof window === "undefined") {
    return null;
  }
  const Layout = dynamic(() => import("../components/Layout"));
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <HomeSwiper gallery={gallery} />
        <GridProject projects={projects} />
        <About about={about} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const [gallery, projects, about] = await Promise.all([
    fetchAPI("/gallery"),
    fetchAPI("/projects?_limit=4"),
    fetchAPI("/about"),
  ]);

  return {
    props: { gallery, projects, about },
    revalidate: 1,
  };
}

export default Home;
