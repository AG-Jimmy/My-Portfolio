export default function Skills({ ProfileInfoSkills }) {
  const skills = ProfileInfoSkills.data[0].skills;
  const _id = ProfileInfoSkills.data[0]._id;

  return (
    <div className="container px-3">
      <h2>Skills</h2>
      <div className=" text-center my-5">
        <div className=" row row-cols-xm-2 row-cols-3 row-cols-lg-5 g-2 ">
          {skills.map((skill) => (
            <div className="col" key={Math.random()}>
              <div className="p-3 border border-light">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
