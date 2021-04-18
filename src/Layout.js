import React from "react";
import Footer from "./Footer";

function Layout({ children }) {
  return (
  <div className="Layout">
  {children}
  <Footer/>
  </div>);
}

export default Layout;
