import GridProject from "../components/GridProject";
// import Layout from "../components/Layout";
import Seo from "../components/Seo";
import dynamic from "next/dynamic";

export default function Home() {
  if (typeof window === "undefined") {
    return null;
  }

  const Layout = dynamic(() => import("../components/Layout"));
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <GridProject></GridProject>
      </Layout>
    </>
  );
}
