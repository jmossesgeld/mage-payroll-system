import { useState, useCallback, SetStateAction, Dispatch, useEffect } from "react";
import { Employee } from "../lib/types";

var globalEmployees: Employee[] = [];
var listeners: Dispatch<SetStateAction<{}>>[] = [];

export default function useEmployees() {
  const setEmployees = useState({})[1];

  useEffect(() => {
    listeners.push(setEmployees);
    return () => {
      listeners = listeners.filter((l) => l !== setEmployees);
    };
  }, [setEmployees]);

  const dispatch = useCallback(() => {
    listeners.forEach((listener) => listener({}));
  }, []);

  const setGlobalEmployees = useCallback(
    (employees: Employee[]) => {
      globalEmployees = employees;
      dispatch();
    },
    [dispatch]
  );

  const addEmployee = useCallback(
    (employee: Employee) => {
      globalEmployees.push(employee);
      dispatch();
    },
    [dispatch]
  );

  const updateEmployee = useCallback(
    (employee: Employee) => {
      const index = globalEmployees.findIndex((e) => e.id === employee.id);
      globalEmployees[index] = employee;
      dispatch();
    },
    [dispatch]
  );

  const deleteEmployee = useCallback(
    (id: number) => {
      const index = globalEmployees.findIndex((e) => e.id === id);
      console.log("Found employee for deleting: ", globalEmployees[index]);
      globalEmployees.splice(index, 1);
      dispatch();
    },
    [dispatch]
  );

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
