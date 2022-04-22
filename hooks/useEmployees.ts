import { useState, useCallback } from "react";
import { IEmployee } from "../lib/types";

var globalEmployees: IEmployee[] = [];

export default function useEmployees() {
  const [_, setEmployees] = useState({});

  const setGlobalEmployees = useCallback((employees: IEmployee[]) => {
    globalEmployees = employees;
    setEmployees({});
  }, []);

  const addEmployee = useCallback((employee: IEmployee) => {
    globalEmployees.push(employee);
    setEmployees({});
  }, []);

  const updateEmployee = useCallback((employee: IEmployee) => {
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

  return {
    employees: globalEmployees,
    setEmployees: setGlobalEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  };
}
