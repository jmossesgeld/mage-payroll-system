import useEmployees from "../../../hooks/useEmployees";
import { IEmployee } from "../../../lib/types";
import { Button } from "../../UI/Button";
import Table, { Column } from "../../UI/Table";

export default function EmployeeTable() {
  const { employees, deleteEmployee } = useEmployees();

  // Set up columns for the table
  const columns: Column<IEmployee>[] = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    {
      label: "Salary Amount",
      key: "salaryAmount",
      formatFn: (value: number) => `$${value.toLocaleString()}`,
      className: "text-right",
    },
    { label: "Salary Type", key: "salaryType", className: "text-right" },
    { label: "Address 1", key: "address1" },
    { label: "Address 2", key: "address2" },
    {
      label: "",
      key: "id",
      formatFn: (value: number) => (
        <Button className="bg-slate-50 text-sky-800 hover:bg-sky-600 hover:text-white ">
          <i className="fa-solid fa-pen-to-square" />
        </Button>
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

  return (
    <div className="bg-slate-50 px-4 lg:px-40 h-screen">
      <div className="flex flex-col mx-auto ">
        <h1 className="pt-20 px-1 pb-4 text-3xl">Employees</h1>
        <div className="w-full flex flex-col shadow-lg h-[60vh] overflow-auto ">
          <Table data={employees} columns={columns} />
        </div>
        <div className="py-6 px-4 flex gap-3 justify-end">
          <Button color="secondary">Search Employee</Button>
          <Button color="primary">Add New Employee</Button>
        </div>
      </div>
    </div>
  );
}
