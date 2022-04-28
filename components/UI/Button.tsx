import Ripple from "material-ripple-effects";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  round?: boolean;
  color?: "primary" | "secondary";
  onClick?: () => void;
}

export function Button({ className, children, round, color, ...props }: ButtonProps) {
  const ripple = new Ripple();

  return (
    <button
      className={
        "px-6 py-4 border-[1px] transition-all duration-200 " +
        (round ? "rounded-full " : "rounded-lg ") +
        (color === "primary" &&
          " bg-sky-800 text-white hover:bg-white hover:text-sky-900 hover:border-sky-800 ") +
        (color === "secondary" &&
          " bg-slate-600 text-white hover:bg-white hover:text-slate-900 hover:border-slate-600 ") +
        " " +
        className
      }
      onClick={(e) => {
        ripple.create(e, "dark");
        if (props.onClick) props.onClick();
      }}
      {...props}
    >
      {children}
    </button>
  );
}
