import Link from "next/link";
import { GoHome, GoRepo } from "react-icons/go";
import { CgComment } from "react-icons/cg";
import style from "../../styles/navbar.module.css";

export default function Navbarr() {
  return (
    //
    <nav
      className={
        style.continuer +
        " nav justify-content-center container navbar-expand-lg "
      }
    >
      <div className="nav-item mx-2">
        <h5>
          {" "}
          <Link
            className={style.links + " nav-link "}
            href="/"
            style={{ color: "white" }}
          >
            <GoHome /> Home{" "}
          </Link>
        </h5>
      </div>

      <div className={style.nave + " nav-item mx-2"}>
        <h5>
          {" "}
          <Link
            className={style.links + " nav-link "}
            href="/projects"
            style={{ color: "white" }}
          >
            <GoRepo /> Projects{" "}
          </Link>
        </h5>
      </div>

      <div className="nav-item mx-2">
        <h5>
          <Link
            className={style.links + " nav-link "}
            href="/guestbook"
            style={{ color: "white" }}
          >
            <CgComment /> Guestbook{" "}
          </Link>
        </h5>
      </div>
    </nav>
  );
}
