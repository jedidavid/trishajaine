import GridProject from "../components/GridProject";
import Seo from "../components/Seo";
import dynamic from "next/dynamic";
import About from "../components/About";
import HomeSwiper from "../components/HomeSwiper";
import axios from "axios";

const Home = ({ gallery }) => {
  if (typeof window === "undefined") {
    return null;
  }
  const Layout = dynamic(() => import("../components/Layout"));
  console.log(gallery);
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
  const response = await axios.get("http://localhost:1337/gallery");
  const gallery = response.data;

  return {
    props: { gallery },
  };
}

export default Home;
