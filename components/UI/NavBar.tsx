import Link from "next/link";

export interface ILink {
  label: string;
  href: string;
}

const NavLink = ({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) => (
  <Link key={href} href={href}>
    <a className={className ?? ""}>{label}</a>
  </Link>
);

export default function NavBar({ links }: { links: ILink[] }) {
  return (
    <div className="fixed top-0 shadow-md w-full h-12 px-[5%] flex justify-between bg-slate-600">
      <div className="flex items-center font-sans text-xl text-white font-bold">
        <NavLink href="/" label="MAGE Payroll System" className="hover:text-sky-500" />
      </div>
      <div className="flex gap-8  text-white items-center justify-end">
        {links.map((props) => (
          <NavLink key={props.href} {...props} className="hover:text-sky-300" />
        ))}
      </div>
    </div>
  );
}
