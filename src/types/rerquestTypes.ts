import { Employee } from "./employeeTypes";

export type APIEmployees = {
  employees: Employee[];
};

export type APIGetEmployee = {
  employee: Employee | null;
};
