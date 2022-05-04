import Modal from "../../UI/Modal";
import React, { useState } from "react";
import EmployeeFormDetails from "./EmployeeFormDetails";

interface EmployeeFormProps {
  id?: number | string;
  children: React.ReactNode;
  className?: string;
}

export default function EmployeeForm({ id, children, className }: EmployeeFormProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal label={children} className={className} state={[isOpen, setIsOpen]}>
      <div className="bg-white p-4 md:p-10 box-content shadow-lg max-w-lg shadow-sky-700 opacity-100 rounded-xl w-full font-segoeui text-slate-800 ">
        <EmployeeFormDetails id={id} close={() => setIsOpen(false)} />
      </div>
    </Modal>
  );
}
