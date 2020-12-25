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
    return this.http.get("https://ancient-meadow-00692.herokuapp.com/api/movies");
  }

  public isAuthenticated(obj : { email : string ,  password: string}): Observable<Object>{
    return this.http.post("https://ancient-meadow-00692.herokuapp.com/api/auth", obj);
  }

  public deleteMovie(id){
          return this.http.delete("https://ancient-meadow-00692.herokuapp.com/api/movies/deleteMovie/"+id);
  }

  public addMovies(data) : Observable<Object>{
    return this.http.post('https://ancient-meadow-00692.herokuapp.com/api/movies/addMovie', data);
  }

  public editMovie(id):  Observable<Object>{
    return this.http.get("https://ancient-meadow-00692.herokuapp.com/api/movies/editMovie/"+id);
  }

  public updateMovie(id, data):  Observable<Object>{
    return this.http.put("https://ancient-meadow-00692.herokuapp.com/api/movies/"+id, data);
  }
}
