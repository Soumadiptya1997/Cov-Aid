import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  constructor(private _location: Location) {}

  ngOnInit(): void {}
  public searchCenter: boolean = true;

  searchClick(): void {
    this.searchCenter = !this.searchCenter;
  }

  backBtn() {
    this._location.back();
  }
}
