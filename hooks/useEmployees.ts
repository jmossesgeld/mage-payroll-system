import { useState, useCallback } from "react";
import { Employee } from "../lib/types";

var globalEmployees: Employee[] = [];

export default function useEmployees() {
  const [_, setEmployees] = useState({});

  const setGlobalEmployees = useCallback((employees: Employee[]) => {
    globalEmployees = employees;
    setEmployees({});
  }, []);

  const addEmployee = useCallback((employee: Employee) => {
    globalEmployees.push(employee);
    setEmployees({});
  }, []);

  const updateEmployee = useCallback((employee: Employee) => {
    const index = globalEmployees.findIndex((e) => e.id === employee.id);
    globalEmployees[index] = employee;
    setEmployees({});
  }, []);

  const deleteEmployee = useCallback((id: number) => {
    const index = globalEmployees.findIndex((e) => e.id === id);
    console.log("Found employee for deleting: ", globalEmployees[index]);
    globalEmployees.splice(index, 1);
    setEmployees({});
  }, []);

  const findEmployee = useCallback((id: number) => {
    return globalEmployees.find((e) => e.id === id);
  }, []);

  return {
    employees: globalEmployees,
    setEmployees: setGlobalEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    findEmployee,
  };
}
