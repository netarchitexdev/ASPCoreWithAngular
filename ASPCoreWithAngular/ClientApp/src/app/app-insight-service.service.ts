import { Injectable } from '@angular/core';
import { AppInsights } from 'applicationinsights-js';
import { environment } from '../environments/environment';

@Injectable()
export class AppInsightService {
  private config: Microsoft.ApplicationInsights.IConfig = {
    instrumentationKey: environment.appInsights.instrumentationKey
  };

  constructor() {
    if (!AppInsights.config) {
      AppInsights.downloadAndSetup(this.config);
    }
  }

  logPageView(name?: string, url?: string, properties?: any,
    measurements?: any, duration?: number) {
    AppInsights.trackPageView(name, url, properties, measurements, duration);
  }

  logEvent(name: string, properties?: any, measurements?: any) {
    AppInsights.trackEvent(name, properties, measurements);
  }

  logError(error: Error, properties?: { [key: string]: string }, measurements?: { [key: string]: number }) {
    AppInsights.trackException(error, null, this.AddGlobalProperties(properties), measurements);
  }

  private AddGlobalProperties(properties?: { [key: string]: string }): { [key: string]: string } {
    if (!properties) {
      properties = {};
    }

    //add your custom properties such as app version

    return properties;
  }
}
