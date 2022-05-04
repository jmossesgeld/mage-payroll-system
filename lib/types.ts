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
