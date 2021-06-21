import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  registerFaq: boolean = false;
  schedulingFaq: boolean = false;
  vaccinationFaq: boolean = false;
  certificateFaq: boolean = false;
  sideffectFaq: boolean = false;
}
