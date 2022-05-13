import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-data-intelligence',
  templateUrl: './data-intelligence.component.html',
  styleUrls: ['./data-intelligence.component.css']
})
export class DataIntelligenceComponent implements OnInit {

  userByBadge: [] | any = [];

  constructor( private _service: AuthService) {

  }

  ngOnInit(): void {
  }



  showByBadge(userBadge:string){

    this._service.getUserByBadge(userBadge).subscribe( (b : any) =>{
       this.userByBadge = b;
       console.log(this.userByBadge)

    })
  }



}
