import { Component } from '@angular/core';
import { AppInsightService } from './app-insight-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private appInsightService: AppInsightService) {
  }

  ngOnInit(): void {
  }
}
