import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.css'],
})
export class SearchContentComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input() sContentData;
}
