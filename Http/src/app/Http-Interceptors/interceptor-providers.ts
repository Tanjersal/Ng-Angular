import { AuthInterceptor } from './auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const InterceptorProviders =  [
{
  provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
}];
