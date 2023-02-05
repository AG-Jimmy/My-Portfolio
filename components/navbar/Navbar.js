import Link from "next/link"

export default function Navbar() {
    return (
      <>
          <Link href="/"> home </Link>
          <Link href="/myProjects"> my Projects </Link>
          <Link href="/guestbook"> guestbook </Link>
      </>
    )
  }
  