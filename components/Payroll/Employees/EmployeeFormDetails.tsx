import useEmployees from "../../../hooks/useEmployees";
import { Employee } from "../../../lib/types";
import { uniqueID } from "../../../lib";
import React, { useMemo, useState } from "react";
import Input from "../../UI/Input";
import useInput from "../../../hooks/useInput";
import { RadioGroup } from "@headlessui/react";

const required = (value: string) => {
  return value.length > 0;
};

const SalaryTypeRadio = ({ checked, label }: { checked: boolean; label: string }) => (
  <span
    className={`static cursor-pointer rounded-full py-1 px-3 mr-2 border-[1px] border-slate-600 ${
      checked ? "text-white bg-slate-600" : "bg-white text-slate-600"
    } transition-all hover:bg-slate-200 hover:text-slate-600`}
  >
    {label}
  </span>
);

const Checkbox = ({ workday }: { workday: string }) => {
  return (
    <label className="mr-2">
      <input className="mr-2" type="checkbox" name="restDays" />
      {workday}
    </label>
  );
};

export default function EmployeeFormDetails({ id }: { id?: number | string }) {
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
  const initialFormValues = useMemo(
    () => (id !== undefined ? findEmployee(id) ?? newEmployeeValues : newEmployeeValues),
    [id, findEmployee, newEmployeeValues]
  );

  const firstName = useInput(initialFormValues.firstName, required);
  const lastName = useInput(initialFormValues.lastName);
  const middleName = useInput(initialFormValues.middleName);
  const suffix = useInput(initialFormValues.suffix);
  const address1 = useInput(initialFormValues.address1);
  const address2 = useInput(initialFormValues.address2);
  const salaryType = useInput(initialFormValues.salaryType, required);
  const salaryAmount = useInput(initialFormValues.salaryAmount.toString(), required);
  const [restDays, setRestDays] = useState(initialFormValues.restDays);

  console.log("form rendered");

  return (
    <form className="flex flex-wrap items-stretch">
      <Input placeholder="First name*" {...firstName} />
      <Input placeholder="Last name" {...lastName} />
      <Input placeholder="Middle name" {...middleName} />
      <Input placeholder="Suffix (Jr./Sr.)" {...suffix} />
      <Input
        placeholder="Room, House No., Building, Street, Subdivision, Barangay"
        containerClassName="w-full"
        {...address1}
      />
      <Input placeholder="Municipality, City, Province" containerClassName="w-full" {...address2} />
      <RadioGroup
        value={salaryType.value}
        onChange={(value) => salaryType.onChange({ target: { value } })}
        className="w-full md:w-1/2 p-4 flex-grow align-middle "
      >
        <RadioGroup.Label className="text-sm mr-3">Salary Type: </RadioGroup.Label>
        <div className="inline-flex">
          <RadioGroup.Option value="daily">
            {({ checked }) => <SalaryTypeRadio checked={checked} label="Daily" />}
          </RadioGroup.Option>
          <RadioGroup.Option value="fixed">
            {({ checked }) => <SalaryTypeRadio checked={checked} label="Fixed" />}
          </RadioGroup.Option>
        </div>
      </RadioGroup>
      <Input
        placeholder={salaryType.value === "daily" ? "Daily Salary" : "Monthly Salary"}
        {...salaryAmount}
      />
      <div className="flex flex-wrap w-full md:w-1/2 p-4">
        <h3 className="block w-full text-sm">Rest Days:</h3>
        {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
          (day) => (
            <Checkbox key={day} workday={day} />
          )
        )}
      </div>
      <div className="flex flex-col w-full md:w-1/2 p-4">
        <h3 className="block w-full text-sm">Eligibilities for Deduction:</h3>
        {["SSS", "Philhealth", "Pag-ibig"].map((day) => (
          <Checkbox key={day} workday={day} />
        ))}
      </div>
      <div className="flex w-full flex-wrap p-4 gap-3">
        <h3 className="block w-full text-sm">Working Hours:</h3>
        <div>
          <input type="time" className="border-2 p-2 block" />
          <span className="text-xs text-slate-500">Time in</span>
        </div>
        <div>
          <input type="time" className="border-2 p-2 block" />
          <span className="text-xs text-slate-500">Time out</span>
        </div>
      </div>
    </form>
  );
}
