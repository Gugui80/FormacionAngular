import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { MenuServiceService } from './menu-service.service';

describe('MenuServiceService', () => {
  let service: MenuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(MenuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
