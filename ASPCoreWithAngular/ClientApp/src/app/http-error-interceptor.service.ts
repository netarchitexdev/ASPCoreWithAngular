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

        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error("An error occurred:", err.error.message);
          this.logClientError(err.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`);
          let addtionalInfo: { [key: string]: string } = {};
          addtionalInfo["errorStatus"] = err.status.toString();
          addtionalInfo["errorMessage"] = JSON.stringify(err.error);
          this.logServerError(err.error, addtionalInfo);
        }

        // ...optionally return a default fallback value so app can continue (pick one)
        // which could be a default value (which has to be a HttpResponse here)
        // return Observable.of(new HttpResponse({body: [{name: "Default value..."}]}));
        // or simply an empty observable
        return Observable.empty<HttpEvent<any>>();
        //return Observable.of(new HttpResponse({ body: [{ name: "Default value..." }] }));
      });
  }
  private logClientError(error: Error) {
    this.appInsightService.logError(error);
  }
  private logServerError(error: any, properties?: { [key: string]: string}) {
    this.appInsightService.logError(error, properties);
  }
}
