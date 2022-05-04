import useEmployees from "../../../hooks/useEmployees";
import EmployeeForm from "./EmployeeForm";
import { Employee } from "../../../lib/types";
import Table, { Column } from "../../UI/Table";
import { Button } from "../../UI/Button";

export default function EmployeesTable() {
  const { employees, deleteEmployee } = useEmployees();

  const columns: Column<Employee>[] = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    {
      label: "Salary Amount",
      key: "salaryAmount",
      formatFn: (value: number) => `$${value.toLocaleString()}`,
      className: "text-right",
    },
    {
      label: "Salary Type",
      key: "salaryType",
      className: "text-right",
      formatFn: (value: string) => (
        <div className="text-left text-sky-700">{value === "daily" ? "Daily" : "Monthly"}</div>
      ),
    },
    { label: "House No., Building, Street, Brgy", key: "address1" },
    { label: "City/Municipality, Province", key: "address2" },
    {
      label: "",
      key: "id",
      formatFn: (value: number) => (
        <EmployeeForm id={value}>
          <Button className="bg-slate-50 text-sky-800 hover:bg-sky-600 hover:text-white ">
            <i className="fa-solid fa-pen-to-square" />
          </Button>
        </EmployeeForm>
      ),
    },
    {
      label: "",
      key: "id",
      formatFn: (value: number) => (
        <Button
          onClick={() => deleteEmployee(value)}
          className="bg-slate-50 text-red-900 hover:bg-red-600 hover:text-red-50 "
        >
          <i className="fa-solid fa-trash-can" />
        </Button>
      ),
    },
  ];

  return <Table data={employees} columns={columns} />;
}
