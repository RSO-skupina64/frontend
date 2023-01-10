import { TestBed } from '@angular/core/testing';

import { AdministracijaService } from './administracija.service';

describe('PridobiCeneService', () => {
  let service: AdministracijaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministracijaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
