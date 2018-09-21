import { TestBed, inject } from '@angular/core/testing';

import { AppInsightService } from './app-insight-service.service';

describe('AppInsightServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppInsightService]
    });
  });

  it('should be created', inject([AppInsightService], (service: AppInsightService) => {
    expect(service).toBeTruthy();
  }));
});
