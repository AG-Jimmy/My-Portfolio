import Link from "next/link"


export default function Navbar() {
    return (

<div  className="nav justify-content-center">

  <div className="nav-item">
  <Link className="nav-link " href="/"> home </Link>
  </div>

  <div className="nav-item">
  <Link className="nav-link " href="/myProjects"> Projects </Link>
  </div>

  <div className="nav-item">
  <Link className="nav-link " href="/guestbook"> guestbook </Link>
  </div>

</div>

    )
  }
  