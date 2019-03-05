import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Emp } from '../../models/emp/emp';

@Component({
  selector: 'app-courselisting',
  templateUrl: './courselisting.component.html',
  styleUrls: ['./courselisting.component.css']
})
export class CourselistingComponent implements OnInit {
emp: Array<Emp>;
flag: boolean;
  constructor(private empSer: EmployeeService) {
    this.loadEmpInfo();
   }
  ngOnInit() {
    this.flag = false;
  }

  loadEmpInfo(){
    // this.empSer.getEmpInfo();
    this.empSer.getEmpInfoDb().subscribe(empData => { this.emp = empData; this.flag = true;});
  }

}
