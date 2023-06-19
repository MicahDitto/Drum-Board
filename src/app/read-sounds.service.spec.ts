import { TestBed } from '@angular/core/testing';

import { ReadSoundsService } from './read-sounds.service';

describe('ReadSoundsService', () => {
  let service: ReadSoundsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadSoundsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
