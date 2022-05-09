import { useEffect, useState } from "react";
import Employees from "../components/Payroll/Employees";
import Layout from "../components/Payroll/Layout";
import useEmployees from "../hooks/store/useEmployees";
import { Employee } from "../lib/types";

export default function EmployeesPage() {
  const { setEmployees } = useEmployees();

  useEffect(() => {
    fetch("/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, [setEmployees]);

  return (
    <Layout>
      <Employees />
    </Layout>
  );
}
