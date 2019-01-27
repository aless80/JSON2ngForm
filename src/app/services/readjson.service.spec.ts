import { TestBed } from '@angular/core/testing';

import { ReadjsonService } from './readjson.service';

describe('ReadjsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadjsonService = TestBed.get(ReadjsonService);
    expect(service).toBeTruthy();
  });
});
