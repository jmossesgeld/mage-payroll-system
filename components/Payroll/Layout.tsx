import NavBar, { ILink } from "../UI/NavBar";

const links: ILink[] = [
  {
    label: "Employees",
    href: "/employees",
  },
  {
    label: "Timekeeping",
    href: "/timekeeping",
  },
  {
    label: "Payroll Report",
    href: "/report",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-roboto overflow-auto">
      <NavBar links={links} />
      {children}
    </div>
  );
}
