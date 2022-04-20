import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-roboto">
      <NavBar />
      {children}
    </div>
  );
}
