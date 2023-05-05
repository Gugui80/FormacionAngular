import { TestBed } from '@angular/core/testing';

import { ManagerHtppService } from './manager-htpp.service';

describe('ManagerHtppService', () => {
  let service: ManagerHtppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerHtppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
