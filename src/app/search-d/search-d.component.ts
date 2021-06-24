import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'search-d',
  templateUrl: './search-d.component.html',
  styleUrls: ['./search-d.component.css']
})
export class SearchDComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  @Input() public searchData;

  searchContent: boolean = false;
  searchBtnClick(): void {
    this.searchContent = !this.searchContent;
  }

}
