import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-district',
  templateUrl: './search-district.component.html',
  styleUrls: ['./search-district.component.css'],
})
export class SearchDistrictComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input() public searchData;
}
