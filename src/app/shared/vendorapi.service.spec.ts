import { TestBed } from '@angular/core/testing';

import { VendorapiService } from './vendorapi.service';

describe('VendorapiService', () => {
  let service: VendorapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
