
export default function About() {
    return (
      <div className="imgNameBio  container  " style={{paddingTop:"60px"}}>


      <div className="row ">
        
        <div className="col  justify-content-end d-flex  " >
          <img  src="myIMG.jpg" alt="my profile image" width='60%' height='60%' className="rounded-circle  img-thumbnail"/> 
        </div>

        <div className="col  d-flex align-items-center" >
          <div >       
            <h1>Ahmed Gamal</h1>
            <h6>MERN Stack developer</h6>
          </div>
        </div>

      </div>

      <div className=" p-5">
        <h2>About</h2>
        <ul>
          <li><p> Over 1 years of professional exposure in JavaScript technology such as React JS, 
           MongoDB, Express.js and Node JS.</p></li>
          <li><p> Expertise in developing web pages using HTML5, CSS3,  ES6, AJAX, JSON, . 
          Good understanding of Document Object Model (DOM) and DOM Functions.</p></li>
          <li><p> Expertise in creating the user validation forms and using the RESTful
           services for sending the data to the server.</p></li>
          <li><p> Expert in designing web applications and web contents utilizing 
          various Search Engine Optimization (SEO) techniques.</p></li>
          <li> <p> Good experience on working with CSS Background, padding, table, Animations, 
          Pseudo classes and Layouts, positioning, border, margin, Pseudo elements and CSS 
          behaviors including the Box model.</p></li>
          <li><p> Created visual design of graphic elements like ,logos, icons with using Photoshop, illustrator</p></li>
          <li><p> Strong experience with using the version controls GIT, GITHUB, and Package manager NPM.</p></li>
          <li> <p> Good Understanding of RDBMS through Database Design, writing queries and 
          stored procedures using databases like MySQL and mongo db</p></li>
        
          </ul>
        {/* <p >experience in developing web page using html,css,Bootstrap,javascript,React.js,Node.js,mySQL,MongoDB.
            Good understanding document algorithm and data structures and good used  </p> */}
      </div>

      </div>
    )
  }
  