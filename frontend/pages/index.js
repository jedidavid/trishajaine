import GridProject from "../components/GridProject";
import Seo from "../components/Seo";
import dynamic from "next/dynamic";
import About from "../components/About";
import HomeSwiper from "../components/HomeSwiper";
import { fetchAPI } from "../lib/api";

const Home = ({ gallery, projects }) => {
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
        <About />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const [gallery, projects] = await Promise.all([
    fetchAPI("/gallery"),
    fetchAPI("/projects?_limit=4"),
  ]);

  return {
    props: { gallery, projects },
    revalidate: 1,
  };
}

export default Home;
