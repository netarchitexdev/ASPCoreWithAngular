import { Component } from '@angular/core';
import { AppInsightService } from './app-insight-service.service';
import { ToasterService, ToasterConfig, Toast } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private toasterService: ToasterService;

  public config1: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right',
    animation: 'fade'
  });

  constructor(private appInsightService: AppInsightService, toasterService: ToasterService) {
    this.toasterService = toasterService;
  }

  popToast() {
    var toast: Toast = {
      type: 'info',
      title: 'Here is a Toast Title',
      body: 'Here is a Toast Body',
      showCloseButton: true
    };

    this.toasterService.pop(toast);
  }

  ngOnInit(): void {
  }
}
