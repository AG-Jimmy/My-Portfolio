import "../styles/globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div className="globalBody bg-gradient">
      <div className="">
        <Head>
          <meta
            name="description"
            content="Portfolio Ahmed Gamal as (MERN)full stack developer  "
          />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
