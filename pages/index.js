import About from "../components/homePage/About";
import Skills from "../components/homePage/Skills";
import Head from "next/head";



export default function Home() {
  return (
       <>
     <Head><title>Portfolio</title></Head>
     <About />
     <Skills/>
      </>
  )
}

