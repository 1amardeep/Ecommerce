import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable()

export class MyInterceptor implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const API_Key = '123456';

    return next.handle(req.clone({setHeaders : {API_Key}})).pipe(
      filter( event => event instanceof HttpResponse),
      map((event : HttpResponse<any>) => {
       return event.clone({
         body : event.body
       });
      })
    );
  }
}
