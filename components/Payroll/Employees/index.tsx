import Link from "next/link";
import { Button } from "../../UI/Button";
import EmployeeForm from "./EmployeeForm";
import EmployeeSearch from "./EmployeeSearch";
import EmployeesTable from "./EmployeesTable";

export default function Employees() {
  return (
    <div className="bg-slate-50 px-4 lg:px-40 h-screen overflow-hidden">
      <div className="flex flex-col mx-auto ">
        <h1 className="pt-20 px-1 pb-4 text-3xl">Employees</h1>
        <div className="w-full flex flex-col shadow-lg h-[60vh] overflow-auto bg-white">
          <EmployeesTable />
        </div>
        <div className="py-6 px-4 flex flex-col sm:flex-row gap-3 justify-end items-stretch">
          <EmployeeSearch />
          <EmployeeForm
            label={
              <Button color="primary" className="w-full">
                Add New Employee
              </Button>
            }
          />
          <Link href="/timekeeping">
            <a>
              <Button color="secondary" className="w-full">
                Go to Time Keeping
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
