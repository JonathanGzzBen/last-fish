import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container px-5 pt-5 mt-5">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
