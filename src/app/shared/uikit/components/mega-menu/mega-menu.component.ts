import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.css']
})
export class MegaMenuComponent implements OnInit {

 @Output('hideMenu') hideMenu = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onHideMenu(){
    this.hideMenu.emit()
  }
}
