import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http: HttpClient) { }

  getAllLinks(){
    return  [
      {title:'Catalog', 
       route:'catalog', 
       sottolink:[
                 {title:'How we Help',
                  url:'how-we-help'},
                 {title:'Data Intelligence',
                  url:'data-intelligence'},
                 {title:'Intelligent Automation',
                  url:'intelligent-automation'}

                ]
      },
      {title:'Contacts',  
       route:'contacts',
       sottolink:[ {title:'link 4',
                     url:'https://angular.io/'},
                   {title:'link 5',
                     url:'https://angular.io/'},
                   {title:'link 6',
                    url:'https://angular.io/'} 
                  ]
       }
    ]
  }
}
