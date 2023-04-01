import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dateForm = new FormGroup({
    day: new FormControl('', [Validators.required, Validators.max(31)]),
    month: new FormControl('', [Validators.required, Validators.max(12)]),
    year: new FormControl('', [Validators.required, Validators.max(2023)]),

  })
  yy!:number;
  mm!:number;
  
  years: any = "--";
  months: any = "--";
  days: any = "--";
  constructor() {
  }
  

  onsubmit() {
const today = new Date(); // Create a new Date object with the current date and time
const currentMonth = today.getMonth() + 1; // Get the current month (add 1 because getMonth() returns 0-based month index)
// const startOfYear = new Date(today.getFullYear(), 0, 0); // Create a new Date object for the start of the year
// const daysInYear = Math.floor((today.getTime() - startOfYear.getTime()) / 86400000); // Calculate the number of days since the start of the year

// console.log(`Today is the ${daysInYear}th day of the year`); // Output: "Today is the 90th day of the year" (for example)

const currentYear = today.getFullYear(); 
    console.log(currentYear)
   this.years= currentYear-this.yy
   this.months= this.mm-currentMonth
   
  }
}
