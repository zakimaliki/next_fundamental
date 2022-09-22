import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";
import NextNProgress from "nextjs-progressbar";
import { Fragment } from "react";


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <NextNProgress />
      <Component {...pageProps} />
      <Foot/>
    </Fragment>
  );
}

export default MyApp;
