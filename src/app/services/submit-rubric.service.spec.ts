import { TestBed } from '@angular/core/testing';

import { SubmitRubricService } from './submit-rubric.service';

describe('SubmitRubricService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmitRubricService = TestBed.get(SubmitRubricService);
    expect(service).toBeTruthy();
  });
});
