import { Component } from '@angular/core';
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
    animation: 'flyRight',
    limit: 5,
    newestOnTop: true,
    mouseoverTimerStop: true
  });

  constructor(toasterService: ToasterService) {
    this.toasterService = toasterService;
  }

  ngOnInit(): void {
  }

}
