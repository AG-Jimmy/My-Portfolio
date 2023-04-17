import CardProject from "@/components/projectPage/cardProject";
import Head from "next/head";
import { GoRepo } from "react-icons/go";

export default function MyProjects({ projects }) {
  return (

    <div>
      <Head>  <title>Portfolio | Projects</title>  </Head>
      <h1 className="text-center"><GoRepo /> Projects on my repositories</h1>
      {
        projects.map((project) =>
        project.name !== "Ahmed-Gamal-Jimmy" ? 
        (<CardProject  project={project} key={project.id} />) : (""))
      }
    </div>
        );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.github.com/users/Ahmed-Gamal-Jimmy/repos"
  );
  const projects = await res.json();
  return { props: { projects } };
}
