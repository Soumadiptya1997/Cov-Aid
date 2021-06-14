import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  myname: string = 'Hello';

  public searchCenterOn: boolean = true;
  public searchCenterOff: boolean = false;

  onClick(): void {
    this.searchCenterOn = !this.searchCenterOn;
    this.searchCenterOff = !this.searchCenterOff;
  }
}
