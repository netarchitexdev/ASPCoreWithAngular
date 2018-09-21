import { Component, ReflectiveInjector } from '@angular/core';
import { AppInsightService } from '../app-insight-service.service';

@Component({
  template: ''
})
export class BaseComponent {

  private appInsightService: AppInsightService;

  constructor() {
    // Manually retrieve the monitoring service from the injector 
    // so that constructor has no dependencies that must be passed in from child 
    const injector = ReflectiveInjector.resolveAndCreate([
      AppInsightService
    ]);
    this.appInsightService = injector.get(AppInsightService);
    this.logNavigation();
  }

  private logNavigation() {
    this.appInsightService.logPageView();
  }
} 
