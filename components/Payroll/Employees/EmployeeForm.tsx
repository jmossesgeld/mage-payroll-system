import Modal from "../../UI/Modal";
import useEmployees from "../../../hooks/useEmployees";
import { Employee } from "../../../lib/types";
import { uniqueID } from "../../../lib";
import React, { useState } from "react";
import Input from "../../UI/Input";
import Radio from "../../UI/Radio";

interface EmployeeFormProps {
  id?: number;
  children: React.ReactNode;
  className?: string;
}

export default function EmployeeForm({ id, children, className }: EmployeeFormProps) {
  const defaultValues = {
    id: id || 0,
    firstName: "",
    lastName: "",
    middleName: "",
    suffix: "",
    address1: "",
    address2: "",
    salaryType: "",
    salaryAmount: 0,
    eligibilities: { SSS: true, HDMF: true, PHIC: true },
    restDays: [0],
    workingHours: { from: "8:00", to: "5:00" },
  };

  const { findEmployee } = useEmployees();

  // Populate the form with the employee's data if it's an edit
  const [formState, setFormState] = useState<Employee>(
    id ? findEmployee(id) ?? defaultValues : defaultValues
  );

  uniqueID();

  return (
    <Modal label={children} className={className}>
      <div className="bg-white p-4 box-content shadow-lg max-w-md shadow-sky-700 opacity-100 rounded-xl font-calibri w-full text-slate-800">
        <form className="flex flex-wrap">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Middle Name" />
          <Input placeholder="Suffix (Jr./Sr.)" />
          <Input
            placeholder="Room, House No., Building, Street, Subdivision, Barangay"
            containerClassName="w-full"
          />
          <Input placeholder="Municipality, City, Province" containerClassName="w-full" />
          <div className="flex flex-col w-1/2 p-4">
            <Radio label="Daily" name="salaryType" />
            <Radio label="Fixed (Monthly)" name="salaryType" />
          </div>
        </form>
      </div>
    </Modal>
  );
}
