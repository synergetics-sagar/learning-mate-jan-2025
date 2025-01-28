import { TestBed } from '@angular/core/testing';

import { UsersHttpClientService } from './users-http-client.service';

describe('UsersHttpClientService', () => {
  let service: UsersHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
