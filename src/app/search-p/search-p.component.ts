import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-p',
  templateUrl: './search-p.component.html',
  styleUrls: ['./search-p.component.css']
})
export class SearchPComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  @Input() public searchData;

  searchContent: boolean = false;
  searchBtnClick(): void {
    this.searchContent = !this.searchContent;
  }

}
