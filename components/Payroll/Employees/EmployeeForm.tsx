import Modal from "../../UI/Modal";
import useEmployees from "../../../hooks/useEmployees";
import { Employee } from "../../../lib/types";
import { uniqueID } from "../../../lib";
import React, { useMemo, useState } from "react";
import Input from "../../UI/Input";
import Radio from "../../UI/Radio";
import useInput from "../../../hooks/useInput";
import RadioGroup from "../../UI/RadioGroup";

interface EmployeeFormProps {
  id?: number;
  children: React.ReactNode;
  className?: string;
}

const required = (value: string) => {
  return value.length > 0;
};

export default function EmployeeForm({ id, children, className }: EmployeeFormProps) {
  const { findEmployee } = useEmployees();

  const newEmployeeValues: Employee = useMemo(() => {
    return {
      id: uniqueID(),
      firstName: "",
      lastName: "",
      middleName: "",
      suffix: "",
      address1: "",
      address2: "",
      salaryType: "daily",
      salaryAmount: 0,
      eligibilities: { SSS: true, HDMF: true, PHIC: true },
      restDays: [0],
      workingHours: { from: "8:00", to: "5:00" },
    };
  }, []);

  // Populate the form with the employee's data if it's an edit and use the default values otherwise
  const initialFormValues =
    id !== undefined ? findEmployee(id) ?? newEmployeeValues : newEmployeeValues;

  const firstName = useInput(initialFormValues.firstName, required);
  const lastName = useInput(initialFormValues.lastName);
  const middleName = useInput(initialFormValues.middleName);
  const suffix = useInput(initialFormValues.suffix);
  const address1 = useInput(initialFormValues.address1);
  const address2 = useInput(initialFormValues.address2);
  const salaryType = useInput(initialFormValues.salaryType, (value) => false);

  console.log("form rendered");

  return (
    <Modal label={children} className={className}>
      <div className="bg-white p-4 md:p-10 box-content shadow-lg max-w-lg shadow-sky-700 opacity-100 rounded-xl font-calibri w-full text-slate-800">
        <form className="flex flex-wrap">
          <Input placeholder="First name*" {...firstName} />
          <Input placeholder="Last name" {...lastName} />
          <Input placeholder="Middle name" {...middleName} />
          <Input placeholder="Suffix (Jr./Sr.)" {...suffix} />
          <Input
            placeholder="Room, House No., Building, Street, Subdivision, Barangay"
            containerClassName="w-full"
            {...address1}
          />
          <Input
            placeholder="Municipality, City, Province"
            containerClassName="w-full"
            {...address2}
          />
          <RadioGroup name="salaryType" className="flex flex-col w-1/2 p-4" {...salaryType}>
            <Radio label="Daily" value="daily" />
            <Radio label="Fixed (Monthly)" value="fixed" />
          </RadioGroup>
        </form>
      </div>
    </Modal>
  );
}
