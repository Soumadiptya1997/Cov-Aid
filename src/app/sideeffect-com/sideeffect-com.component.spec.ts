import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideeffectComComponent } from './sideeffect-com.component';

describe('SideeffectComComponent', () => {
  let component: SideeffectComComponent;
  let fixture: ComponentFixture<SideeffectComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideeffectComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideeffectComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
