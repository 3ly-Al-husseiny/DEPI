import { TestBed } from '@angular/core/testing';

import { RegisterAuth } from './register-auth';

describe('RegisterAuth', () => {
  let service: RegisterAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
