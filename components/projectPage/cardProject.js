// import Image from "next/legacy/image";
import Style from "../../styles/cardProject.module.css";

export default function CardProject({ project }) {
  const { name, language } = project;
  const id = project.id;
  // const myImg = project.owner.avatar_url;
  const topic = project.topics;
  const description = project.description;
  const urlProject = project.html_url;

  return (
    
    <div className="container  justify-content-center d-flex p-5">

      <div className={Style.cards} key={id}>
        <h2 className={Style.titleCards}>{name}</h2>

        <h6 className={Style.textCards}>{description}</h6>

        <h2 className={Style.titleCards}>topic & technology</h2>

        <h6 className={Style.textCards}> {...topic.join(" , ")} {language}</h6>

        <div className="justify-content-center d-flex p-2">
          <a
            class={Style.buttonLinkCards + " text-center"}
            href={urlProject}
            target="_blank"
          >
            visit my repo
          </a>
        </div>
      </div>
    </div>
  );
}
