import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards = [{img:' https://it.nttdata.com/-/media/project/emea/it/blogs/blog-2022/15a_datagovernance.jpg?cx=0.5&cy=0.29&cw=1000&ch=667&hash=7BD9D1C13518335C54DD7A19FE9AED5E'},
  {img:' https://it.nttdata.com/-/media/project/emea/it/win/zineb-win.jpg?cx=0.48&cy=0.54&cw=1000&ch=667&hash=FBA3BD9E7E4086B9B22321E1A0C386E1'},
  {img:'https://it.nttdata.com/-/media/project/emea/it/immagini-italia/immagini-articoli-blog/22_blog_earthday_669x427.jpg?cx=0.36&cy=0.33&cw=1000&ch=667&hash=29CE902CB6FE9708B138F7990DB0C493'},
  {img:' https://it.nttdata.com/-/media/project/emea/it/blogs/blog-2022/14a_sfidacustomerexperience.jpg?cx=0.36&cy=0.33&cw=1000&ch=667&hash=24D3941ED5D259C45ED3DAE7808EB8E4'}]

  otherCards = [{img:' https://it.nttdata.com/-/media/project/emea/it/immagini-italia/gartner/immagine-report-gartner.png?cx=0.5&cy=0.5&cw=1000&ch=667&hash=45E694E054F274E422C5278447922660'},
  {img:'https://it.nttdata.com/-/media/project/emea/it/immagini-italia/whitepapers/corporate-banking-outlook/wp-corporate-banking-outlook_header.png?cx=0.48&cy=0.47&cw=1000&ch=667&hash=65C37FFBABF6586E216A1DEFABD4BEF4'},
  {img:'https://it.nttdata.com/-/media/project/emea/it/immagini-italia/whitepapers/enabling-video-smart-operations/wp_enabling-video-smart-operations_header.jpg?cx=0.43&cy=0.49&cw=1000&ch=667&hash=389521DC154141F9232D08766ED35944'},
  {img:' https://it.nttdata.com/-/media/project/emea/it/immagini-italia/whitepapers/travel/whitepaper-travel_header.jpg?cx=0.43&cy=0.49&cw=1000&ch=667&hash=627B98B0823286403E2B10F83E65782A'}]

  imgLatestCards= [{img:' https://it.nttdata.com/-/media/project/emea/it/newsroom/ifdesign2.jpg?cx=0.25&cy=0.6&cw=1000&ch=667&hash=8926183F3D2B5BDED04D033D279E328B'},
  {img:'https://it.nttdata.com/-/media/project/emea/it/newsroom/insurtech-final-version.jpg?cx=0.25&cy=0.6&cw=1000&ch=667&hash=36E7055282C9FEC17FE24779E3083609'},
  {img:'https://it.nttdata.com/-/media/project/emea/it/newsroom/specializzazione-cloud-migration.jpg?cx=0.5&cy=0.5&cw=1000&ch=667&hash=F552995BC88519E86C59AB0F3F2E9035'},
  {img:' https://it.nttdata.com/-/media/project/emea/it/newsroom/ntt-data-grecia.png?cx=0.54&cy=0.49&cw=1000&ch=667&hash=5E057505B8DB159BF13075C01FB24855'}]

  constructor() { }

  ngOnInit(): void {
  }

}
