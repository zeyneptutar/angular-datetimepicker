/*eslint-disable */
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {all} from 'codelyzer/walkerFactory/walkerFn';
// @ts-ignore

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'course-recipe-project';
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
}
