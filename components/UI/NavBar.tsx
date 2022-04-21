import Link from "next/link";
import Menu from "./Menu";

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
    <div className="fixed top-0 shadow-sm w-full h-12 px-[5%] flex justify-between bg-white slate-600">
      <div className="flex items-center font-sans text-xl text-slate-600 font-bold">
        <NavLink
          href="/"
          label="MAGE Payroll System"
          className="hover:text-sky-500 transition-all w-max"
        />
      </div>
      <div>
        <div className="hidden lg:flex gap-8 h-full text-slate-600 items-center justify-end">
          {links.map((props) => (
            <NavLink key={props.href} {...props} className="hover:text-sky-300 transition-all" />
          ))}
        </div>
        <div className="flex lg:hidden h-full text-slate-600 items-center justify-end">
          <Menu label="=" right className="border-2 px-2 rounded-xl">
            {links.map((props) => (
              <NavLink
                key={props.href}
                {...props}
                className="hover:text-sky-300 transition-all border-b-2 last:border-b-0 pl-12 pr-20 py-2 border-b-slate-400"
              />
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
}
