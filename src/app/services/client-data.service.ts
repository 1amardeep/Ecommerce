import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  constructor(
    private http : HttpClient
    ) { }

 public getTableData():  Observable<Object>{
    return this.http.get(environment.url+"api/movies");
  }

  public registerUser(obj : {name : string, email : string ,  password: string}): Observable<Object>{
    return this.http.post(environment.url+"api/user/addUser", obj);
  }

  public isAuthenticated(obj : { email : string ,  password: string}): Observable<Object>{
    return this.http.post(environment.url+"api/auth", obj);
  }

  public deleteMovie(id){
          return this.http.delete(environment.url+"api/movies/deleteMovie/"+id);
  }

  public addMovies(data) : Observable<Object>{
    return this.http.post(environment.url+'api/movies/addMovie', data);
  }

  public editMovie(id):  Observable<Object>{
    return this.http.get(environment.url+"api/movies/editMovie/"+id);
  }

  public updateMovie(id, data):  Observable<Object>{
    return this.http.put(environment.url+"api/movies/"+id, data);
  }
}
