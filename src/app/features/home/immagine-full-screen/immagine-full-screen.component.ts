import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immagine-full-screen',
  templateUrl: './immagine-full-screen.component.html',
  styleUrls: ['./immagine-full-screen.component.css']
})
export class ImmagineFullScreenComponent implements OnInit {
  text: string = 'CANDIDATI ORA'
  link: string = 'contacts'

  constructor() { }

  ngOnInit(): void {
  }

}
