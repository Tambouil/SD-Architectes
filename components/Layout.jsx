import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta from "./Meta";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  if (router.pathname != "/")
    return (
      <>
        <Meta />
        <Navbar />
        {children}
        <Footer />
      </>
    );
  else
    return (
      <>
        <Meta />
        <Navbar />
        {children}
      </>
    );
};

export default Layout;
