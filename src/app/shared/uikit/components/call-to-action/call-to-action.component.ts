import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent implements OnInit {

  @Input('text') text: string | undefined;
  @Input('link') link: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
