import React from "react";

interface ModalProps {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  state: [boolean, (bool: boolean) => void];
}

export default function Modal({ children, label, className, state, ...props }: ModalProps) {
  const [isOpen, setIsOpen] = state;
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div {...props} className="inline">
      <span onClick={toggle} className={className}>
        {label}
      </span>
      {isOpen && (
        <div
          onClick={(event) => {
            if (event.target == event.currentTarget) {
              toggle();
            }
          }}
          className={`fixed left-0 top-0 w-full h-full shadow-sm z-10 bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] flex justify-center items-center`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
