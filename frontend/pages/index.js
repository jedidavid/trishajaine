import GridProject from "../components/GridProject";
import Seo from "../components/Seo";
import dynamic from "next/dynamic";
import About from "../components/About";
import HomeSwiper from "../components/HomeSwiper";
export default function Home() {
  if (typeof window === "undefined") {
    return null;
  }

  const Layout = dynamic(() => import("../components/Layout"));
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <HomeSwiper />
        <GridProject />
        <About />
      </Layout>
    </>
  );
}
