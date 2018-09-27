import { Component, ReflectiveInjector } from '@angular/core';
import { AppInsightService } from '../app-insight-service.service';
//import { ToasterService, ToasterConfig, Toast } from 'angular2-toaster';

@Component({
  template: ''
})
export class BaseComponent {

  private appInsightService: AppInsightService;

  //private toasterService: ToasterService;

  constructor() {
    // Manually retrieve the monitoring service from the injector 
    // so that constructor has no dependencies that must be passed in from child 
    let injector = ReflectiveInjector.resolveAndCreate([
      AppInsightService
    ]);
    this.appInsightService = injector.get(AppInsightService);
    //injector = ReflectiveInjector.resolveAndCreate([
    //  ToasterService
    //]);
    //this.toasterService = injector.get(ToasterService);
    this.logNavigation();
  }

  private logNavigation() {
    this.appInsightService.logPageView();
  }

  //protected popToast(title: string, body: string) {
  //  var toast: Toast = {
  //    type: 'info',
  //    title: title,
  //    body: body,
  //    showCloseButton: true
  //  };

  //  this.toasterService.pop(toast);
  //}

} 
