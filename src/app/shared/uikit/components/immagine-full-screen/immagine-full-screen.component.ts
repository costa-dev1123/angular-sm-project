import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-immagine-full-screen',
  templateUrl: './immagine-full-screen.component.html',
  styleUrls: ['./immagine-full-screen.component.css']
})
export class ImmagineFullScreenComponent implements OnInit {
  
  @Input('imgUrl') imgUrl: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
