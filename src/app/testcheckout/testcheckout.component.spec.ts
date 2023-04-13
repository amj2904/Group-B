import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcheckoutComponent } from './testcheckout.component';

describe('TestcheckoutComponent', () => {
  let component: TestcheckoutComponent;
  let fixture: ComponentFixture<TestcheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
