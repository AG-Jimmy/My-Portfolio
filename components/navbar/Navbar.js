import Link from "next/link";
import { GoHome, GoRepo } from "react-icons/go";
import { CgComment } from "react-icons/cg";
import style from "../../styles/navbar.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbarr() {
  return (
<Container  className={style.continuer}>  

    <Navbar   expand="md">

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className={style.nav} href="/"><GoHome />Home</Link>
          <Link className={style.nav} href="/projects"> <GoRepo />Projects</Link>
          <Link className={style.nav} href="/guestbook"> <CgComment />Guestbook</Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>

  </Container>
  );
}
