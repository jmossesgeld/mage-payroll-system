import { IEmployee } from "../../../lib/types";
import Table, { Column } from "../../UI/Table";

export default function EmployeeTable({ employees }: { employees: IEmployee[] }) {
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
  ];

  return (
    <div className="pt-12 px-4 flex justify-center items-center h-screen">
      <div className="w-max shadow-lg mx-auto h-[60vh] overflow-auto ">
        <Table data={employees} columns={columns} cellPadding={4} />
      </div>
    </div>
  );
}
