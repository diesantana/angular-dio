import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(){
    localStorage.setItem('token', '123456');
  }

  doLogout(){
    localStorage.clear();
  }
}
