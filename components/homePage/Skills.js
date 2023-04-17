import Style from "../../styles/Skills.module.css";
export default function Skills({ ProfileInfoSkills }) {
  const skills = ProfileInfoSkills.data[0].skills;
  const _id = ProfileInfoSkills.data[0]._id;

  return (
    <div className="container px-3">
      <h2 className={Style.skillsContentTitle}>Skills</h2>
      <div className=" text-center my-3">
        <div className=" row  row-cols-2  row-cols-lg-5 g-2 ">
          {skills.map((skill) => (
            <div className="col" key={Math.random()}>
              <div className={"p-3 border border-light"}><span className={Style.skillsContent}>{skill}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
