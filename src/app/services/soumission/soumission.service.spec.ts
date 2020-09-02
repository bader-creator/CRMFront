import { TestBed } from '@angular/core/testing';

import { SoumissionService } from './soumission.service';

describe('SoumissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoumissionService = TestBed.get(SoumissionService);
    expect(service).toBeTruthy();
  });
});
