import { Component } from '@angular/core';
import { LinkService } from './shared/uikit/services/link.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sm-project';
  constructor(private linkService:LinkService){}

  getAllUsers(){
    this.linkService.getAllUsers().subscribe(console.log);
  }
}
