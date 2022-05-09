import Input from "../../UI/Input";
import { TextField } from "@mui/material";
import PeriodPicker from "../../UI/PeriodPicker";
import usePeriod from "../../../hooks/store/usePeriod";

export default function Timekeeping() {
  const periodState = usePeriod();

  return (
    <div className="mt-16 p-8 border-2 flex mx-4 md:mx-52">
      <div className="flex justify-between w-full">
        <TextField label="Select Employee" />
        <PeriodPicker {...periodState} />
      </div>
    </div>
  );
}
