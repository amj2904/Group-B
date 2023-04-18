import { TestBed } from '@angular/core/testing';

import { DisputeServiceService } from './dispute-service.service';

describe('DisputeServiceService', () => {
  let service: DisputeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisputeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
