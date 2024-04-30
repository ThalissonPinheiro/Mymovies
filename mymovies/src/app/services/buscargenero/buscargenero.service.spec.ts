import { TestBed } from '@angular/core/testing';

import { BuscargeneroService } from './buscargenero.service';

describe('BuscargeneroService', () => {
  let service: BuscargeneroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscargeneroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
