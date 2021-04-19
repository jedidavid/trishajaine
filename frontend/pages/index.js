import GridProject from "../components/GridProject";
import Seo from "../components/Seo";
import dynamic from "next/dynamic";
import About from "../components/About";
import HomeSwiper from "../components/HomeSwiper";
import { fetchAPI } from "../lib/api";

const Home = ({ gallery, projects, about, global }) => {
  if (typeof window === "undefined") {
    return null;
  }
  const Layout = dynamic(() => import("../components/Layout"));
  return (
    <>
      <Seo title="Home" />
      <Layout global={global}>
        <HomeSwiper gallery={gallery} />
        <GridProject projects={projects} />
        <About about={about} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const [gallery, projects, about, global] = await Promise.all([
    fetchAPI("/gallery"),
    fetchAPI("/projects?_limit=4"),
    fetchAPI("/about"),
    fetchAPI("/global"),
  ]);

  return {
    props: { gallery, projects, about, global },
    revalidate: 1,
  };
}

export default Home;
