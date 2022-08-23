import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

type Info = {
  type: string;
  field: string;
}

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  public intercept = (context: ExecutionContext, next: CallHandler): Observable<any> => {
    const [req, , , gql] = context.getArgs();

    let info: Info;
    if (gql) info = { type: gql.parentType, field: gql.fieldName };
    else info = { type: req.route.stack[0].method, field: req.route.path };

    const logContext = gql ? 'GraphQL' : 'Router';
    const logMessage = `${info.type} » ${info.field}`;

    return next.handle().pipe(tap(() => Logger.verbose(logMessage, logContext)));
  };
}
