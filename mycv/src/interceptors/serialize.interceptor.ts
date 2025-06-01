import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {plainToInstance} from "class-transformer";

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    console.log('I am running before the handler', context.getClass());

    return handler.handle().pipe(
      map((data: any) => {
        console.log('I am running before the response is sent out', data);
        // return plainToInstance(this.dto, data, {
        //   excludeExtraneousValues: true,
        // });
      })
    )
  }
}
