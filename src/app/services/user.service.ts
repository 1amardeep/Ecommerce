import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isUserLoggedIn(): boolean{
    return true;
  }
}
