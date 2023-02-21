import Link from "next/link"
import style from '../../styles/navbar.module.css'


export default function Navbar() {
    return (

<div  className={style.continuer+ " nav justify-content-center container "} >
  


  <div className="nav-item">
  <h5><Link className={style.links+ " nav-link "} href="/" style={{color:'white'}}> home </Link></h5>
  </div>

  <div className={style.nave+ " nav-item"}>
 <h5> <Link className={style.links+ " nav-link "} href="/myProjects"style={{color:'white'}}> Projects </Link></h5>
  </div>

  <div className="nav-item">
 <h5> <Link className={style.links+ " nav-link "} href="/guestbook"style={{color:'white'}}> guestbook </Link></h5>
  </div>

</div>

    )
  }
  