import { TestBed } from '@angular/core/testing';

import { DescifradoService } from './descifrado.service';

describe('DescifradoService', () => {
  let service: DescifradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescifradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
