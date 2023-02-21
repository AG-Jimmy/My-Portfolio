import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
export default function Footer() {
  return (
    <div>
  

     



      <footer className="bg-black bg-opacity-25 p-2 container-fluid text-center text-white">
 
  <div className=" p-4 pb-0">

    <section className="mb-4">
 
      <a className="btn btn-outline-light btn-floating m-1" target="_blank"  href="https://www.linkedin.com/in/ahmedgamal21724" role="button" >
        <i > <BsLinkedin/></i>
        </a>

        <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://github.com/Ahmed-Gamal-Jimmy" role="button" >
        <i className="fab fa-facebook-f"><GoMarkGithub/></i>
        </a>

        <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.facebook.com/ahmed.medo.teto" role="button" >
        <i className="fab fa-facebook-f"><BsFacebook/></i>
        </a>

    </section>
  
  </div>

</footer>












    </div>
  );
}
