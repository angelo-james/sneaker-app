import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";
import Footer from "./Footer";
import LoginModal from "./LoginModal";

export default function Layout({ children }) {
  const isModalOpen = useSelector((state) => state.loginModal.open);

  return (
    <div>
      <Navbar />
      <SubNavbar />
      {isModalOpen ? <LoginModal /> : false}
      <div>{children}</div>
      <Footer />
    </div>
  );
}
