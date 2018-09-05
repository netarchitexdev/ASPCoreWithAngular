import { TestBed, inject } from '@angular/core/testing';

import { Errors.HandlerService } from './errors.handler.service';

describe('Errors.HandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Errors.HandlerService]
    });
  });

  it('should be created', inject([Errors.HandlerService], (service: Errors.HandlerService) => {
    expect(service).toBeTruthy();
  }));
});
