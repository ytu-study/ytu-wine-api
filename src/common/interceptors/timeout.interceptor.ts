import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  public intercept = (context: ExecutionContext, next: CallHandler): Observable<any> => next.handle().pipe(timeout(30000));
}
