import CardProject from "@/components/projectPage/cardProject"
import Head from "next/head"


export default function MyProjects(props) {
    return (
      <div>
         <Head> 
       <title>Portfolio | Projects</title>
       </Head>
       {props.projects.map(project=>(
 <div key={project.id}>
    {/* <div><img src={project.ava} alt="1"/></div> */}
      <div>
         <div><h6>{project.name}</h6></div>
         <div>{project.language}</div>
      </div>
</div>
       ))}
      
        {console.log(props)}
      </div>
    )
  }
   
  export  async function getStaticProps(){

    const res= await fetch('https://api.github.com/users/Ahmed-Gamal-Jimmy/repos');
    const data=await res.json();
    return{props:{projects:data}};
};   