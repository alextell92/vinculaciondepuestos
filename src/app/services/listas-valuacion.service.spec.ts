import { TestBed } from '@angular/core/testing';

import { ListasValuacionService } from './listas-valuacion.service';

describe('ListasValuacionService', () => {
  let service: ListasValuacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListasValuacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
