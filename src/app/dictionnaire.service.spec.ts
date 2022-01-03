import { TestBed } from '@angular/core/testing';

import { DictionnaireService } from './services/dictionnaire.service';

describe('DictionnaireService', () => {
  let service: DictionnaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionnaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
