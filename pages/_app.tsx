import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";

const App = ({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) => (
  <SessionProvider session={pageProps.session}>
    <div className="md:flex md:flex-col-reverse">
      <TopNav />
      <div className="mx-8 text-center p-16 leading-8 text-xl min-h-screen">
        <Component {...pageProps} />
      </div>
      <Navbar />
    </div>
    <Footer />
  </SessionProvider>
);

export default App;
