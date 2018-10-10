import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {
  openTimepicker = true;
  openMonths = false;
  openDatepicker = false;
  openYears = false;

  toggleDatepicker() {
    this.openDatepicker = !this.openDatepicker;
  }

  toggleTimepicker() {
    this.openTimepicker = !this.openTimepicker;
    this.openMonths = false;
  }

  toggleMonths() {
    this.openMonths = !this.openMonths;
    this.openTimepicker = !this.openTimepicker;
  }

  toggleYears() {
    this.openMonths = false;
    this.openYears = !this.openYears;

  }
  constructor() { }

  ngOnInit() {
  }

}
