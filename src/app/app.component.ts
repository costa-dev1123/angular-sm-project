import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sm-project';
  constructor(private _service: AuthService){}

  getAllUsers(){
    this._service.getAllUsers().subscribe(console.log);
  }
}
