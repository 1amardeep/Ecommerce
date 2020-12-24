import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable()

export class MyInterceptor implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    const token_key = sessionStorage.getItem("token_key") || '';

    return next.handle(req.clone({setHeaders : {'x-auth-token': token_key}})).pipe(
      filter( event => event instanceof HttpResponse),
      map((event : HttpResponse<any>) => {
       return event.clone({
         body : event.body
       });
      })
    );
  }
}
