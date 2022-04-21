import { useEffect, useState } from "react";
import EmployeeTable from "../components/Payroll/Employees/EmployeeTable";
import Layout from "../components/Payroll/Layout";
import { IEmployee } from "../lib/types";

export default function Employees() {
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  useEffect(() => {
    fetch("/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <Layout>
      <EmployeeTable employees={employees} />
    </Layout>
  );
}
