import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComComponent } from './registration-com.component';

describe('RegistrationComComponent', () => {
  let component: RegistrationComComponent;
  let fixture: ComponentFixture<RegistrationComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
