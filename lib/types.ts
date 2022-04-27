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
  restDays: number[];
  workingHours: { from: string; to: string };
  eligibilities: { SSS: boolean; PHIC: boolean; HDMF: boolean };
}
