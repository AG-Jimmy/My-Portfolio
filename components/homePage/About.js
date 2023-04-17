import Style from "../../styles/about.module.css";
export default function About({ ProfileInfoAbout }) {
  let abouts = ProfileInfoAbout.data[0].about;
// console.log(ProfileInfoAbout.data[0]._id);
  return (
    <div className=" py-5 px-3 container ">
      <h2 className={Style.aboutContentTitle}>About</h2>
      <ul className={Style.aboutContainer}>
        {abouts.map((about) => (
          <li className={Style.aboutContent}  key={Math.random()}>
            <p>{about}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
