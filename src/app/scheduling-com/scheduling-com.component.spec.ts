import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingComComponent } from './scheduling-com.component';

describe('SchedulingComComponent', () => {
  let component: SchedulingComComponent;
  let fixture: ComponentFixture<SchedulingComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
