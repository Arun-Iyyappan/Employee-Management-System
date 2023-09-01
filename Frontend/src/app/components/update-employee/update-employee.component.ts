import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/interface/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  id!: number;
  employee: Employee = new Employee();
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empService.getEmployeeById(this.id).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateEmployee() {
    this.empService.updateEmployee(this.id, this.employee).subscribe(
      (data) => {
        console.log(data);
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  gotoList() {
    this.router.navigate(['employees']);
  }

  onSubmit() {
    this.updateEmployee();
  }
}
