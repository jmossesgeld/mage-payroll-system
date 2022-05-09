import { getDaysInBetween } from "../../../lib";
import { Employee, Period } from "../../../lib/types";

export default function TimeCard({ employee, period }: { employee: Employee; period: Period }) {
  const days = getDaysInBetween(period.from, period.to);

  days.forEach((day) => {
    // Create new time record if it doesn't exist
    if (employee.timeRecords === undefined) employee.timeRecords = {};
    employee.timeRecords[day] = employee.timeRecords[day] || {
      timeIn: "",
      timeOut: "",
      isRestDay: false,
      isAbsent: false,
      isRegularHoliday: false,
      isSpecialHoliday: false,
    };
  });

  return (
    <div>
      <h1>{period.from}</h1>
      <h1>{period.to}</h1>
    </div>
  );
}
