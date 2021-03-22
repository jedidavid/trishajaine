import GridProject from "../components/GridProject";
import Seo from "../components/Seo";
import dynamic from "next/dynamic";
import About from "../components/About";
import HomeSwiper from "../components/HomeSwiper";
import { fetchAPI } from "../lib/api";

const Home = ({ gallery }) => {
  if (typeof window === "undefined") {
    return null;
  }
  const Layout = dynamic(() => import("../components/Layout"));
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <HomeSwiper gallery={gallery} />
        <GridProject />
        <About />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const gallery = await fetchAPI("/gallery");

  return {
    props: { gallery },
  };
}

export default Home;
