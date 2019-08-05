import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Testing interceptor');
    console.log('Original req: ' + req.headers);

    const modifiedHeaders = req.clone({ headers: req.headers.set('Auth', 'Xyz') });
    console.log('Modified req: ' + modifiedHeaders);

    return next.handle(modifiedHeaders).pipe(tap(event => {
      if(event instanceof HttpResponse) {
        console.log(event.body);
      }
    }));
  }
}
