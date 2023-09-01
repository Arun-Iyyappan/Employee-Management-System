import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interface/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  constructor(private employeeService: EmployeeService, private route: Router) { }

  employee: Employee = new Employee();

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      data => {
        console.log(data);
        this.goToEmployeeList();
      },
      (error) => {
        console.log(error)
      }
    )
  }

  goToEmployeeList() {
    this.route.navigate(['/employees']);
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
}
