import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.css']
})
export class Route5Component {
  studentsData: any = [];
  stuHeaders: any = [];
  count = 0;
  headerValue = '';
  newStatedArrayOfStudents: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("/assets/students.json")
      .subscribe((res: any) => {
        this.studentsData = res;
        this.newStatedArrayOfStudents = this.studentsData;
        this.stuHeaders = Object.keys(this.studentsData[0]);
      });
  }
  getOrderChanged(event: any) {
    this.headerValue = event.target.value;
    this.count++;

    const sortedArray  = this.studentsData.slice().sort((a: any, b: any) => {
      if(a[this.headerValue] < b[this.headerValue])
          return -1;
      if(a[this.headerValue] > b[this.headerValue])
          return 1;
      else
          return 0;
    });
    if (this.count == 1)
      this.getOrderAsc(sortedArray);
    if (this.count == 2)
      this.getOrderDesc(sortedArray);
    else if (this.count == 3)
      this.resetOriginalOrder(sortedArray);

  }
  getOrderAsc(value: any) {
    console.log("count is 1:   " + value);
    this.newStatedArrayOfStudents = value;
  
  }
  getOrderDesc(value: any) {
    console.log("count is 2:   " + value);
    this.newStatedArrayOfStudents = value.reverse();
  }
  resetOriginalOrder(value: any) {
    console.log("count is 3:   " + value);
    this.newStatedArrayOfStudents = this.studentsData;
  
    this.count = 0;
  }

}
