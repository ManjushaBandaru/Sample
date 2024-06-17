import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  // @Input() employee: any;
  formGroup!: FormGroup;
  employees: any[] = [];

  constructor(private emp: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.emp.getemp().subscribe((a: any) => {
      this.employees = a;
      console.log(a);
    });
  }
  getImageSource(gender: string): string {
    const trimmedGender = gender.trim().toLowerCase();
    if (trimmedGender === 'm') {
      return 'assets/male user.webp';
    } else if (trimmedGender === 'f') {
      return 'assets/Female user image.webp';
    } else {
      return 'assets/default user image.webp'; 
    }
  }

}
