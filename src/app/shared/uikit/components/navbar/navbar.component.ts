import { Component, OnInit } from '@angular/core';

import { LinkService } from '../../services/link.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links:  any = [] ;
  showMenu: boolean = false;
  selectedLink:any = {};
  constructor(private _service: LinkService) { }

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
}
