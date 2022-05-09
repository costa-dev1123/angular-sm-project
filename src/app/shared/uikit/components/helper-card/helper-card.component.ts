import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-helper-card',
  templateUrl: './helper-card.component.html',
  styleUrls: ['./helper-card.component.css']
})
export class HelperCardComponent implements OnInit {
  @Input('imgUrl') imgUrl: string | undefined;
  @Input('borderBottomr') borderBottomr: string | undefined;
  @Input('borderBottoml') borderBottoml: string | undefined;
  @Input('borderTop') borderTop: string | undefined;
  @Input('position') position: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
