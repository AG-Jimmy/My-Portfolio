import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Head from "next/head";

export default function Home() {
  return (
       <>
     <Head><title>Portfolio</title></Head>
     <About/>
     <Skills/>
      </>
  )
}
