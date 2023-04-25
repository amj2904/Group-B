import { TestBed } from '@angular/core/testing';

import { UsersignupapiService } from './usersignupapi.service';

describe('UsersignupapiService', () => {
  let service: UsersignupapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersignupapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
