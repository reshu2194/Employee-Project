// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = { id: 0, name: '', position: '', department: '' };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  saveEmployee(): void {
    if (this.employee.id === 0) {
      this.employeeService.addEmployee(this.employee);
    } else {
      this.employeeService.editEmployee(this.employee.id, this.employee);
    }
    this.employee = { id: 0, name: '', position: '', department: '' };
  }
  
  
}
