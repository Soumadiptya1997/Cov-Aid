import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDComponent } from './search-d.component';

describe('SearchDComponent', () => {
  let component: SearchDComponent;
  let fixture: ComponentFixture<SearchDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
