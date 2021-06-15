import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-pin',
  templateUrl: './search-pin.component.html',
  styleUrls: ['./search-pin.component.css'],
})
export class SearchPinComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input() public searchData;
}
