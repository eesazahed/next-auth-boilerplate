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
    <div className="md:flex md:flex-col-reverse relative">
      <div className="fixed top-0 left-0 right-0 z-50 md:static">
        <TopNav />
      </div>

      <div className="pt-32 pb-32 mx-8 text-center leading-8 text-xl min-h-screen overflow-y-auto">
        <Component {...pageProps} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 md:static">
        <Navbar />
      </div>
    </div>
    {/* <Footer /> */}
  </SessionProvider>
);

export default App;
