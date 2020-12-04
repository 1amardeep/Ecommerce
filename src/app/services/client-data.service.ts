import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  constructor(
    private http : HttpClient
  ) { }

 public getTableData():  Observable<Object>{
    return this.http.get("assets/data/data.json");
  }
}
