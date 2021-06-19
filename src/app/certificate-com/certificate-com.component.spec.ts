import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateComComponent } from './certificate-com.component';

describe('CertificateComComponent', () => {
  let component: CertificateComComponent;
  let fixture: ComponentFixture<CertificateComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
