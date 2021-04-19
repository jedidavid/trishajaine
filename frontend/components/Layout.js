import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, global }) => {
  return (
    <div className="page">
      <Header cv={global.cv} />
      <main>{children}</main>
      <Footer
        email={global.email}
        phone={global.phone}
        linkedin={global.linkedin}
        behance={global.behance}
      />
    </div>
  );
};

export default Layout;
