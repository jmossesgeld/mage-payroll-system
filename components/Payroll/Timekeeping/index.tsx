import { TextField } from "@mui/material";
import PeriodPicker from "../../UI/PeriodPicker";
import usePeriod from "../../../hooks/store/usePeriod";
import TimeCard from "./TimeCard";
import useEmployees from "../../../hooks/store/useEmployees";

export default function Timekeeping() {
  const periodState = usePeriod();
  const { employees, updateEmployee } = useEmployees();

  return (
    <div className="mt-16 p-8 border-2 flex mx-4 lg:mx-52 flex-col gap-8">
      <div className="flex-col md:flex-row flex justify-between w-full gap-8">
        <div className="w-full lg:w-96">
          <TextField label="Select Employee" fullWidth />
        </div>
        <PeriodPicker {...periodState} />
      </div>
      <TimeCard employee={employees[0]} updateEmployee={updateEmployee} period={periodState.period} />
    </div>
  );
}
