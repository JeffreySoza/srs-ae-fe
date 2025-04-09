import { TestBed } from '@angular/core/testing';

import { WindowReferenceServiceService } from './window-reference-service.service';

describe('WindowReferenceServiceService', () => {
  let service: WindowReferenceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowReferenceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
