import React from "react";
import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
