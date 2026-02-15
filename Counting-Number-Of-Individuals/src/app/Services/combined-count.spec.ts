import { TestBed } from '@angular/core/testing';

import { CombinedCount } from './combined-count';

describe('CombinedCount', () => {
  let service: CombinedCount;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombinedCount);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
