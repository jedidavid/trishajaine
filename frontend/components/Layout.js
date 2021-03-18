import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="page">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
