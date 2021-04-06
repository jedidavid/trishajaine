import React from "react";
import { NextSeo } from "next-seo";

const Seo = (props) => {
  return (
    <>
      <NextSeo
        title={`Trisha Jaine | ${props.title}`}
        description="My architecture portfolio"
        canonical="https://www.trishajaine.com/"
        openGraph={{
          url: props.link,
          title: `Trisha Jaine | ${props.title}`,
          description: props.desc,
          site_name: "Trisha Jaine",
        }}
      />
    </>
  );
};

export default Seo;
