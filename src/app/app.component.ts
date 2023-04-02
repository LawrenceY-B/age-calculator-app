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
  dd!:number;
  
  years: any = "--";
  months: any = "--";
  days: any = "--";
  constructor() {
  }
  

  onsubmit() {
const today = new Date(); // Create a new Date object with the current date and time
const currentMonth = today.getMonth() + 1; // Get the current month (add 1 because getMonth() returns 0-based month index)
const currentYear = today.getFullYear(); 
const currentDay= today.getDate();

  console.log(currentYear)
 
  this.days=Math.abs(this.dd-currentDay) 


  if(this.mm>currentMonth){
    this.years= (currentYear-this.yy)-1
   this.months= Math.abs((this.mm-currentMonth)-12)
  }else if(this.mm<currentMonth){
    this.years= (currentYear-this.yy)
    this.months= Math.abs((this.mm-currentMonth))
    
  }
  else if(this.mm==currentMonth){
    this.years= (currentYear-this.yy)-1
    this.months= Math.abs((this.mm-currentMonth))


  }
   
  }
}
