import { Component } from '@angular/core';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  /**
   *
   */
  constructor(private notification: NotificationService) {
    this.notification.success("title", "message", "hi");
  }
}
