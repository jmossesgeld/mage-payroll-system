export interface Period {
  from: string;
  to: string;
}

export interface Employee {
  id: number | string;
  firstName: string;
  lastName: string;
  middleName: string;
  suffix: string;
  address1: string;
  address2: string;
  salaryType: "daily" | "fixed";
  salaryAmount: number;
  restDays: { 0: boolean; 1: boolean; 2: boolean; 3: boolean; 4: boolean; 5: boolean; 6: boolean };
  workingHours: { from: string; to: string };
  eligibilities: { SSS: boolean; PHIC: boolean; HDMF: boolean };
}

export interface TimeRecord {
  date: string;
  timeIn: string;
  timeOut: string;
  employeeId: Employee["id"];
  isRestDay: boolean;
  isAbsent: boolean;
  isRegularHoliday: boolean;
  isSpecialHoliday: boolean;
}

export interface Salary {
  employeeId: Employee["id"];
  basicSalary: number;
  overtime: number;
  late: number;
  undertime: number;
  absent: number;
  holiday: number;
  restDay: number;
  sss: number;
  phic: number;
  hdmf: number;
  tax: number;
  [key: string]: number | string;
}

export interface PayrollReport {
  period: Period;
  salaries: Salary[];
}
