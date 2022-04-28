import Modal from "../../UI/Modal";
import React from "react";
import EmployeeFormDetails from "./EmployeeFormDetails";

interface EmployeeFormProps {
  id?: number | string;
  children: React.ReactNode;
  className?: string;
}

export default function EmployeeForm({ id, children, className }: EmployeeFormProps) {
  return (
    <Modal label={children} className={className}>
      <div className="bg-white p-4 md:p-10 box-content shadow-lg max-w-lg shadow-sky-700 opacity-100 rounded-xl w-full font-segoeui text-slate-800">
        <EmployeeFormDetails id={id} />
      </div>
    </Modal>
  );
}
