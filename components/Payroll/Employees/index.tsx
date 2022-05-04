import { Button } from "../../UI/Button";
import EmployeeForm from "./EmployeeForm";
import EmployeesTable from "./EmployeesTable";

export default function Employees() {
  return (
    <div className="bg-slate-50 px-4 lg:px-40 h-screen overflow-hidden">
      <div className="flex flex-col mx-auto ">
        <h1 className="pt-20 px-1 pb-4 text-3xl">Employees</h1>
        <div className="w-full flex flex-col shadow-lg h-[60vh] overflow-auto bg-white">
          <EmployeesTable />
        </div>
        <div className="py-6 px-4 flex gap-3 justify-end">
          <Button color="secondary">Search Employee</Button>
          <EmployeeForm>
            <Button color="primary">Add New Employee</Button>
          </EmployeeForm>
        </div>
      </div>
    </div>
  );
}
