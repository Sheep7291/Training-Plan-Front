import { TestBed } from '@angular/core/testing';

import { TrainingPlanApiService } from './training-plan-api.service';

describe('TrainingPlanApiService', () => {
  let service: TrainingPlanApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingPlanApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
