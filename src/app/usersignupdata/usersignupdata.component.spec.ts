import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersignupdataComponent } from './usersignupdata.component';

describe('UsersignupdataComponent', () => {
  let component: UsersignupdataComponent;
  let fixture: ComponentFixture<UsersignupdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersignupdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersignupdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
