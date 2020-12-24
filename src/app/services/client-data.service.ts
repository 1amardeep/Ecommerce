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
    return this.http.get("http://localhost:3000/api/movies");
  }

  public isAuthenticated(obj : { email : string ,  password: string}): Observable<Object>{
    return this.http.post("http://localhost:3000/api/auth", obj);
  }

  public deleteMovie(id){
          return this.http.delete("http://localhost:3000/api/movies/deleteMovie/"+id);
  }

  public addMovies(data) : Observable<Object>{
    return this.http.post('http://localhost:3000/api/movies/addMovie', data);
  }

  public editMovie(id):  Observable<Object>{
    return this.http.get("http://localhost:3000/api/movies/editMovie/"+id);
  }

  public updateMovie(id, data):  Observable<Object>{
    return this.http.put("http://localhost:3000/api/movies/"+id, data);
  }
}
