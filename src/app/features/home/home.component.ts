import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards = [{img:' https://it.nttdata.com/-/media/project/emea/it/blogs/blog-2022/15a_datagovernance.jpg?cx=0.5&cy=0.29&cw=1000&ch=667&hash=7BD9D1C13518335C54DD7A19FE9AED5E'},
  {img:' https://it.nttdata.com/-/media/project/emea/it/blogs/blog-2022/15a_datagovernance.jpg?cx=0.5&cy=0.29&cw=1000&ch=667&hash=7BD9D1C13518335C54DD7A19FE9AED5E'},
  {img:' https://it.nttdata.com/-/media/project/emea/it/blogs/blog-2022/15a_datagovernance.jpg?cx=0.5&cy=0.29&cw=1000&ch=667&hash=7BD9D1C13518335C54DD7A19FE9AED5E'},
  {img:' https://it.nttdata.com/-/media/project/emea/it/blogs/blog-2022/15a_datagovernance.jpg?cx=0.5&cy=0.29&cw=1000&ch=667&hash=7BD9D1C13518335C54DD7A19FE9AED5E'}]

  constructor() { }

  ngOnInit(): void {
  }

}
