export default function About({ ProfileInfoAbout }) {
  let abouts = ProfileInfoAbout.data[0].about;

  return (
    <div className=" py-5 px-3 container">
      <h2>About</h2>
      <ul>
        {abouts.map((about) => (
          <li>
            <p>{about}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
