import NavBar from "../UI/NavBar";

const links = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Login", href: "/login" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-roboto">
      <NavBar links={links} />
      {children}
    </div>
  );
}
