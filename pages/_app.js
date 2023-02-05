
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import "../styles/globals.css"
import Head from "next/head"
import { useEffect } from "react";


export default function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  return(
  <>
       <Head> <meta name="description" content="Portfolio Ahmed Gamal as (MERN)full stack developer  "/>
  
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>

  </> 
  
  )}
