import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactUsDataComponent } from './admin-contact-us-data.component';

describe('AdminContactUsDataComponent', () => {
  let component: AdminContactUsDataComponent;
  let fixture: ComponentFixture<AdminContactUsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContactUsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContactUsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
