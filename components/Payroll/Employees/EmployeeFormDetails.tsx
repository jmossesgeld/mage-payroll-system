import useEmployees from "../../../hooks/store/useEmployees";
import { Employee } from "../../../lib/types";
import { uniqueID } from "../../../lib";
import React, { useMemo, useState } from "react";
import Input from "../../UI/Input";
import useInput from "../../../hooks/useInput";
import { RadioGroup } from "@headlessui/react";
import { Button } from "../../UI/Button";

// Fn to be used for input validation
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

const Checkbox = ({
  label,
  checked,
  name,
  onChange,
}: {
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}) => {
  return (
    <label className="mr-2">
      <input className="mr-2" type="checkbox" name={name} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};

interface EmployeeFormDetailsProps {
  id?: number | string;
  close: () => void;
}

export default function EmployeeFormDetails({ id, close }: EmployeeFormDetailsProps) {
  const { findEmployee, updateEmployee, addEmployee } = useEmployees();
  const [isFormValid, setIsFormValid] = useState(false);

  // Create default values for the form
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
      eligibilities: { SSS: true, PHIC: true, HDMF: true },
      restDays: { 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false },
      workingHours: { from: "8:00", to: "5:00" },
    };
  }, []);

  // Populate the form with the employee's data if it's an edit and use the default values otherwise
  const initialFormValues = useMemo(
    () => (id !== undefined ? findEmployee(id) ?? newEmployeeValues : newEmployeeValues),
    [id, findEmployee, newEmployeeValues]
  );

  // Initialize the form values
  const firstName = useInput(initialFormValues.firstName, required);
  const lastName = useInput(initialFormValues.lastName);
  const middleName = useInput(initialFormValues.middleName);
  const suffix = useInput(initialFormValues.suffix);
  const address1 = useInput(initialFormValues.address1);
  const address2 = useInput(initialFormValues.address2);
  const salaryType = useInput(initialFormValues.salaryType, required);
  const salaryAmount = useInput(
    initialFormValues.salaryAmount.toString(),
    (value: string) => required(value) && Number(value) > 0
  );
  const [restDays, setRestDays] = useState(initialFormValues.restDays);
  const [eligibilities, setEligibilities] = useState(initialFormValues.eligibilities);
  const [workingHours, setWorkingHours] = useState(initialFormValues.workingHours);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formIsValid =
      firstName.isValid &&
      lastName.isValid &&
      middleName.isValid &&
      suffix.isValid &&
      address1.isValid &&
      address2.isValid &&
      salaryType.isValid &&
      salaryAmount.isValid &&
      workingHours.from !== "" &&
      workingHours.to !== "";

    setIsFormValid(formIsValid);

    if (formIsValid) {
      const employee: Employee = {
        id: initialFormValues.id,
        firstName: firstName.value,
        lastName: lastName.value,
        middleName: middleName.value,
        suffix: suffix.value,
        address1: address1.value,
        address2: address2.value,
        salaryType: salaryType.value as "daily" | "fixed",
        salaryAmount: parseFloat(salaryAmount.value),
        eligibilities: eligibilities,
        restDays: restDays,
        workingHours: workingHours,
      };

      // If the employee is being edited, update the employee otherwise add new employee
      id != undefined ? updateEmployee(employee) : addEmployee(employee);
      close();
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <form
      className="flex flex-wrap items-stretch overflow-auto max-h-[80vh]"
      onSubmit={onFormSubmit}
    >
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
          (day, idx) => (
            <Checkbox
              key={day}
              label={day}
              checked={restDays[idx as keyof typeof restDays]}
              onChange={(e) => setRestDays({ ...restDays, [idx]: e.target.checked })}
              name="restDays"
            />
          )
        )}
      </div>
      <div className="flex flex-col w-full md:w-1/2 p-4">
        <h3 className="block w-full text-sm">Eligibilities for Deduction:</h3>
        <Checkbox
          label="SSS"
          checked={eligibilities.SSS}
          onChange={(e) => setEligibilities({ ...eligibilities, SSS: e.target.checked })}
        />
        <Checkbox
          label="Philhealth"
          checked={eligibilities.PHIC}
          onChange={(e) => setEligibilities({ ...eligibilities, PHIC: e.target.checked })}
        />
        <Checkbox
          label="Pagibig"
          checked={eligibilities.HDMF}
          onChange={(e) => setEligibilities({ ...eligibilities, HDMF: e.target.checked })}
        />
      </div>
      <div className="flex w-full md:w-1/2 flex-col p-4 gap-3">
        <h3 className="block w-full text-sm">Working Hours:</h3>
        <div className="flex">
          <div>
            <input
              type="time"
              id="timeIn"
              className="border-2 p-2 block"
              value={workingHours.from}
              onChange={(e) =>
                setWorkingHours((prev) => {
                  return { ...prev, from: e.target.value };
                })
              }
            />
            <label htmlFor="timeIn" className="text-xs text-slate-500">
              Time in
            </label>
          </div>
          <div>
            <input
              type="time"
              id="timeOut"
              className="border-2 p-2 block"
              value={workingHours.to}
              onChange={(e) =>
                setWorkingHours((prev) => {
                  return { ...prev, to: e.target.value };
                })
              }
            />
            <label htmlFor="timeOut" className="text-xs text-slate-500">
              Time out
            </label>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-1/2 items-center justify-end flex-wrap p-4">
        <Button color="success">Apply Changes</Button>
      </div>
    </form>
  );
}
