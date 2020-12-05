import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackButtonService {

  backHidden = new Subject<boolean>();

  constructor() { }

  backCheck(show:boolean){
     this.backHidden.next(show);
  }

  getStatus() : Observable<boolean>{
    return this.backHidden.asObservable();
  }

}
