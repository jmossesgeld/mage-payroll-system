import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import { Period } from "../../lib/types";

interface PeriodPickerProps {
  period: Period;
  setPeriod: (state: Period) => void;
}

export default function PeriodPicker({ period, setPeriod }: PeriodPickerProps) {
  return (
    <Tooltip title="Choose payroll period" placement="top">
      <div className="flex">
        <TextField
          type="date"
          label="from"
          value={period.from}
          onChange={(e) => {
            setPeriod({ ...period, from: e.target.value });
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          type="date"
          label="to"
          value={period.to}
          onChange={(e) => {
            setPeriod({ ...period, to: e.target.value });
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Tooltip>
  );
}
