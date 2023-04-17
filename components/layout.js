import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Head from "next/head";

export default function Layout({ children }) {
    return (
      <>
      <div className="globalBody bg-gradient">
      <div className="">
        <Head>
          {/* <link rel="icon" href="../public/iconLogo.png"/> */}
          <meta
            name="description"
            content="Portfolio Ahmed Gamal as (MERN)full stack developer  "
          />
        </Head>
        <Navbar />

        <main>{children}</main>
        <Footer />
        </div>
    </div>
      </>
    )
  }