import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interface/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];

  constructor(private empservice: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.getEmpList();
  }

  getEmpList() {
    this.empservice.getEmployeesList().subscribe((data) => {
      this.employees = data;
    });
  }

  updateEmployee(employeeid: number) {
    this.router.navigate(['update-employee', employeeid]);
  }

  deleteEmployee(employeeid: number) {
    this.empservice.deleteEmployeeById(employeeid).subscribe((data) => {
      console.log(data);
      this.getEmpList();
    });
  }

  employeeDetails(empId: number) {
    this.router.navigate(['employee-details', empId]);
  }
}
