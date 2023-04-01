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
  
  years: number = NaN;
  months: number = NaN;
  days: number = NaN;
  constructor() {
  }

  onsubmit() {
   
  }
}
