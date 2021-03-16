import React from "react";
import { NextSeo } from "next-seo";

const Seo = (props) => {
  return (
    <>
      <NextSeo
        title={`${props.title} | ${process.env.PROJECT_NAME}`}
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: props.link,
          title: props.title,
          description: props.desc,
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "Website Name",
        }}
      />
    </>
  );
};

export default Seo;
