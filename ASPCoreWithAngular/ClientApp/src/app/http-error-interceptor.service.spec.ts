import { TestBed, inject } from '@angular/core/testing';

import { HttpErrorInterceptorService } from './http-error-interceptor.service';

describe('HttpErrorInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpErrorInterceptorService]
    });
  });

  it('should be created', inject([HttpErrorInterceptorService], (service: HttpErrorInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
