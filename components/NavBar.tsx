import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  return (
    <div className="fixed top-0">
      {links.map(({ label, href }) => (
        <Link key={href} href={href}>
          <a>{label}</a>
        </Link>
      ))}
    </div>
  );
}
