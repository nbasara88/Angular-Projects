import { TestBed } from '@angular/core/testing';

import { FormAuth } from './form-auth';

describe('FormAuth', () => {
  let service: FormAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
