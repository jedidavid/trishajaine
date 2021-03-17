import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Home() {
  if (typeof window === "undefined") {
    return null;
  }
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <div className="container"></div>
      </Layout>
    </>
  );
}
