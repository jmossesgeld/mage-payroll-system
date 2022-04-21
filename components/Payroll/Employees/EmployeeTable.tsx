import { IEmployee } from "../../../lib/types";
import Table, { Column } from "../../UI/Table";

export default function EmployeeTable({ employees }: { employees: IEmployee[] }) {
  const columns: Column<IEmployee>[] = [
    { label: "First Name", key: "firstName" },
    {
      label: "Salary Amount",
      key: "salaryAmount",
      formatFn: (value: number) => `$${value.toLocaleString()}`,
      className: "text-right",
    },
    { label: "Salary Type", key: "salaryType", className: "text-right" },
  ];

  return (
    <div className="pt-12 flex justify-center items-center h-screen">
      <Table data={employees} columns={columns} />
    </div>
  );
}
