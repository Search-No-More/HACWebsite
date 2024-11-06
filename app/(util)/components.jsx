import Link from "next/link";

export function Navbar() {
  return (
    <>
      <div className="nav">
        <Link href={""}>
          <p>Our Culture</p>
        </Link>
        <Link href={""}>
          <p>Services</p>
        </Link>
        <Link href={""}>
          <p>Internships</p>
        </Link>
      </div>
    </>
  );
}
