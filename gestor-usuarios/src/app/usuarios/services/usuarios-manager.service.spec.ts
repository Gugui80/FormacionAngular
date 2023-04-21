import { TestBed } from '@angular/core/testing';

import { UsuariosManagerService } from './usuarios-manager.service';

describe('UsuariosManagerService', () => {
  let service: UsuariosManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
