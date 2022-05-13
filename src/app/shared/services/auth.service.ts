import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { basePath} from '../constants';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpClient) { }

  isAuthenticated():boolean{
    return localStorage.getItem('token') !== null;
  }


  register(utente: User){
    return this._http.post(`${basePath}/api/auth/register`, utente)
  }

  confirm(activationKey: string){
    return this._http.get(`${basePath}/api/auth/confirm?activationKey=${activationKey}`)
  }

  login(utente: User){
    return this._http.post(`${basePath}/api/auth/login`, utente)
  }
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
  // getAllUsers(){
  //   return this._http.get('https://jsonplaceholder.typicode.com/users')
  // }

  getUserByBadge(badge: string){
    return this._http.get(`${basePath}/api/auth/${badge}`)
  }

}
