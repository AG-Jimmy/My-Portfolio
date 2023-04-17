import Style from "../../styles/cardProject.module.css";


export default function CardProject({ project }) {
  const {name} = project;
  const topic = project.topics;
  const description = project.description;
  const urlProject = project.html_url;
  // console.log(project.id);
  return (
    // <div className="container  d-flex p-5">
    <div className={Style.cards+' container'}>
   
        <div>
        <h3 className={Style.titleCards}>{name}</h3>
        <p className={Style.textCards}>{description}</p>
        </div>

        <div>
        <h3 className={Style.titleCards}>topic & technology</h3>
        <p className={Style.textCards}> {...topic.join(", ")}</p>
        </div>

         <div className={Style.divBut} >
        <form  action={urlProject} target="_blank">
         <button className={Style.but}><b>Repo</b></button>
        </form>
        </div>

    </div>
  );
}
