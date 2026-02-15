import { TestBed } from '@angular/core/testing';

import { Calls } from './calls';

describe('Calls', () => {
  let service: Calls;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Calls);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
