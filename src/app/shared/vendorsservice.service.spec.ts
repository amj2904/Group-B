import { TestBed } from '@angular/core/testing';

import { VendorsserviceService } from './vendorsservice.service';

describe('VendorsserviceService', () => {
  let service: VendorsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
