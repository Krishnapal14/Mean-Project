import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-emp-info',
  templateUrl: './create-emp-info.component.html',
  styleUrls: ['./create-emp-info.component.css']
})
export class CreateEmpInfoComponent implements OnInit {
   empId: number;
   empName: string;
   empSalary: number;
   msg: string;
  constructor(private empSer: EmployeeService) { }

  ngOnInit() {
  }

  createUser(userInfo) {
    console.log(userInfo);
    this.empSer.storeEmpInfoDb(userInfo).subscribe(result => this.msg = result);
  }
}
