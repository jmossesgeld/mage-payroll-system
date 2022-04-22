import { useEffect, useState } from "react";
import EmployeeTable from "../components/Payroll/Employees";
import Layout from "../components/Payroll/Layout";
import useEmployees from "../hooks/useEmployees";
import { IEmployee } from "../lib/types";

export default function Employees() {
  const { setEmployees } = useEmployees();

  useEffect(() => {
    fetch("/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, [setEmployees]);

  return (
    <Layout>
      <EmployeeTable />
    </Layout>
  );
}
