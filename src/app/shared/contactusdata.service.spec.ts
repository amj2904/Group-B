import { TestBed } from '@angular/core/testing';

import { ContactusdataService } from './contactusdata.service';

describe('ContactusdataService', () => {
  let service: ContactusdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactusdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
