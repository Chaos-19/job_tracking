import { TestBed } from '@angular/core/testing';

import { ProfileServices } from './profile-services';

describe('ProfileServices', () => {
  let service: ProfileServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
