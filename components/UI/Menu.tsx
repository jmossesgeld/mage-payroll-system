import React from "react";

interface MenuProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  right?: boolean;
}

export default function Menu({ children, label, right, className, ...props }: MenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  console.log(isOpen);

  return (
    <div {...props}>
      <button onClick={toggle} className={className}>
        {label}
      </button>
      {isOpen && (
        <div
          onClick={toggle}
          className={`rounded-xl shadow-xl animate-fade-in-fast w-max absolute flex flex-col border-2 gap-2 bg-slate-500 text-white ${
            right && "right-0"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
