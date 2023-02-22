import HeadProfile from "../components/homePage/HeadProfile";
import About from "../components/homePage/About";
import Skills from "../components/homePage/Skills";
import Head from "next/head";



export default function Home({ProfileInfo}) {
  return (
       <>
     <Head><title>Portfolio</title></Head>
     <HeadProfile ProfileInfo={ProfileInfo}/>
     <About />
     <Skills/>
      </>
  )
}

export  async function getStaticProps(){
  const res= await fetch('https://api.github.com/users/Ahmed-Gamal-Jimmy');
  const ProfileInfo=await res.json();
  return{props:{ProfileInfo}};
};   