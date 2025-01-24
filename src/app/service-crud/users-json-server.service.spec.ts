import { TestBed } from '@angular/core/testing';

import { UsersJsonServerService } from './users-json-server.service';

describe('UsersJsonServerService', () => {
  let service: UsersJsonServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersJsonServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
