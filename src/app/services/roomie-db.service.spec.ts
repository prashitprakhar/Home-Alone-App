import { TestBed, inject } from '@angular/core/testing';

import { RoomieDbService } from './roomie-db.service';

describe('RoomieDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomieDbService]
    });
  });

  it('should be created', inject([RoomieDbService], (service: RoomieDbService) => {
    expect(service).toBeTruthy();
  }));
});
