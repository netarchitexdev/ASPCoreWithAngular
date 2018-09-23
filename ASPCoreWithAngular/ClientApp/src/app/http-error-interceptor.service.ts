import { Injectable, ReflectiveInjector } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/retry';
import { AppInsightService } from './app-insight-service.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  private appInsightService: AppInsightService;
  constructor() {
    // Manually retrieve the monitoring service from the injector 
    // so that constructor has no dependencies that must be passed in from child 
    const injector = ReflectiveInjector.resolveAndCreate([
      AppInsightService
    ]);
    this.appInsightService = injector.get(AppInsightService);
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .catch((err: HttpErrorResponse) => {
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error("An error occurred:", err.error.message);
          this.logClientError(err);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`);          
          this.logBackendError(err);
        }
        // ...optionally return a default fallback value so app can continue (pick one)
        // which could be a default value (which has to be a HttpResponse here)
        // return Observable.of(new HttpResponse({body: [{name: "Default value..."}]}));
        // or simply an empty observable
        return Observable.empty<HttpEvent<any>>();
      });
  }
  private logClientError(error: HttpErrorResponse, properties?: { [key: string]: string }) {
    if (!properties) {
      properties = {};
    }
    properties = {
      'errorSource': 'Client',
      'errorMessage': error.message
    }; 
    this.logError(error, properties);
  }
  private logBackendError(error: HttpErrorResponse, properties?: { [key: string]: string }) {
    if (!properties) {
      properties = {};
    }
    properties = {
      'errorSource': 'Backend',
      'errorStatus' : error.status.toString(),
      'errorMessage' : JSON.stringify(error.error)
    };    
    this.logError(error, properties);
  }
  private logError(error: Error, properties?: { [key: string]: string }) {
    this.appInsightService.logError(error, properties);
  }
}
