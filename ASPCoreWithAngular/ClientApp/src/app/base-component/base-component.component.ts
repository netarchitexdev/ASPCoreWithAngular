import { Component, ReflectiveInjector } from '@angular/core';
import { AppInsightService } from '../app-insight-service.service';
import { ToasterService, Toast } from 'angular2-toaster';

@Component({
  template: ''
})
export class BaseComponent {

  private appInsightService: AppInsightService;

  constructor(private toasterService: ToasterService) {
    // Manually retrieve appInsightService from the injector
    // so that constructor has no dependencies that must be passed in from child 
    let injector = ReflectiveInjector.resolveAndCreate([
      AppInsightService
    ]);
    this.appInsightService = injector.get(AppInsightService);
    this.logNavigation();
  }

  private logNavigation() {
    this.appInsightService.logPageView();
  }

  protected popToast(type: string, title: string, body: string) {
    var toast: Toast = {
      type: type,
      title: title,
      body: body,
      showCloseButton: true
    };
    this.toasterService.pop(toast);
  }

} 
