import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationComComponent } from './vaccination-com.component';

describe('VaccinationComComponent', () => {
  let component: VaccinationComComponent;
  let fixture: ComponentFixture<VaccinationComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
