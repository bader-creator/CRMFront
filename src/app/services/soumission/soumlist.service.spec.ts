import { TestBed } from '@angular/core/testing';

import { SoumlistService } from './soumlist.service';

describe('SoumlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoumlistService = TestBed.get(SoumlistService);
    expect(service).toBeTruthy();
  });
});
