import HeadProfile from "../components/homePage/HeadProfile";
import About from "../components/homePage/About";
import Skills from "../components/homePage/Skills";
import Head from "next/head";

export default function Home({ ProfileInfo }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <HeadProfile ProfileInfoData={ProfileInfo.data[0].head} />
      <About ProfileInfoAbout={ProfileInfo} />
      <Skills ProfileInfoSkills={ProfileInfo} />
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/dataPersonality");
  const ProfileInfo = await res.json();
  return { props: { ProfileInfo } };
}
