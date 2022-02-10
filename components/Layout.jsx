import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  if (router.pathname != "/")
    return (
      <div>
        <Head>
          <title>SD Architectes</title>
          <meta
            name="description"
            content="Agence d'architecture à Rochefort"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {children}
        <Footer />
      </div>
    );
  else
    return (
      <div>
        <Head>
          <title>SD Architectes</title>
          <meta
            name="description"
            content="Agence d'architecture à Rochefort"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {children}
      </div>
    );
};

export default Layout;
