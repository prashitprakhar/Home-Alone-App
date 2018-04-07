import { TestBed, inject } from '@angular/core/testing';

import { RoomieAuthService } from './roomie-auth.service';

describe('RoomieAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomieAuthService]
    });
  });

  it('should be created', inject([RoomieAuthService], (service: RoomieAuthService) => {
    expect(service).toBeTruthy();
  }));
});
