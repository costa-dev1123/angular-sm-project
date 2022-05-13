import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // token:string | any =  localStorage.getItem('token')
  links:  any = [] ;
  showMenu: boolean = false;
  selectedLink:any = {};
  constructor(private _service:  AuthService, private router: Router) { }

  ngOnInit(): void {

   this.links =  this._service.getAllLinks()

  }

  showOtherLinks(link: any){
    this.showMenu = true;
    this.selectedLink = link;
  }

  hideMenu(){
    this.showMenu = false;
    this.selectedLink = {}
  }

  logout( ){
    localStorage.clear();
    this.router.navigate(['login'])
  }
}
