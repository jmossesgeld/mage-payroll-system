import { getDaysInBetween } from "../../../lib";
import { Employee, Period } from "../../../lib/types";

interface TimeCardProps {
  employee: Employee;
  period: Period;
  updateEmployee: () => void;
}

export default function TimeCard({ employee, period, updateEmployee }: TimeCardProps) {
  const daysInBetween = getDaysInBetween(period.from, period.to);

  daysInBetween.forEach((day) => {
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
    updateEmployee();
  });

  return (
    <div>
      <h1>{period.from}</h1>
      <h1>{period.to}</h1>
    </div>
  );
}
