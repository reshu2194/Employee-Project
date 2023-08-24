import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [];

  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  editEmployee(id: number, updatedEmployee: Employee): void {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }
  // Inside employee.service.ts

getEmployeeById(id: number): Employee | undefined {
  return this.employees.find(emp => emp.id === id);
}

}

