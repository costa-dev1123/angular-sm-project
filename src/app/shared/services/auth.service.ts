import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { basePath, port } from '../constants';
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
    return this._http.post(`${basePath}:${port}/api/auth/register`, utente)
  }

  confirm(activationKey: string){
    return this._http.get(`${basePath}:${port}/api/auth/confirm?activationKey=${activationKey}`)
  }

  login(utente: User){
    return this._http.post(`${basePath}:${port}/api/auth/login`, utente)
  }
  
  

}
