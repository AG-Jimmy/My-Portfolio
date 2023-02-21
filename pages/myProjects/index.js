import CardProject from "@/components/projectPage/cardProject"
import Head from "next/head"
import { GoRepo } from "react-icons/go";


export default function MyProjects({projects}) {
    return (
      <div>
         <Head> 
       <title>Portfolio | Projects</title>
       </Head>
       <h1 className=" justify-content-center d-flex " style={{paddingTop:"60px"}}><GoRepo/>Projects on my repositories </h1>
        {projects.map(project=>project.name!=="Ahmed-Gamal-Jimmy"? <CardProject  project={project} />:'')}
      
        {/* {console.log(projects[1])} */}
      </div>
    )
  }
   
  export  async function getStaticProps(){

    const res= await fetch('https://api.github.com/users/Ahmed-Gamal-Jimmy/repos');
    const projects=await res.json();
    return{props:{projects}};
};   

{/* <CardProject key={project.id}/> */}


// {props.projects.map(project=>(
//   <div key={project.id}>
//      {/* <div><img src={project.ava} alt="1"/></div> */}
//        <div>
//           <div><h6>{project.name}</h6></div>
//           <div>{project.language}</div>
//        </div>
//  </div>
//         ))}