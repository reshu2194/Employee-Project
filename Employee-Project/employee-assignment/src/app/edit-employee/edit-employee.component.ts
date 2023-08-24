import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  employee: Employee = { id: 0, name: '', position: '', department: '' };

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const employeeId = +params['id'];
      this.employee = this.employeeService.getEmployees().find(emp => emp.id === employeeId);
    });
  }

  saveEmployee(): void {
    this.employeeService.editEmployee(this.employee.id, this.employee);
  }
}

