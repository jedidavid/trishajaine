import GridProject from "../components/GridProject";
import Seo from "../components/Seo";
import dynamic from "next/dynamic";
import About from "../components/About";
export default function Home() {
  if (typeof window === "undefined") {
    return null;
  }

  const Layout = dynamic(() => import("../components/Layout"));
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <GridProject />
        <About />
      </Layout>
    </>
  );
}
