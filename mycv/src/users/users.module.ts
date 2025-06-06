import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from "./auth.service";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { CurrentUserInterceptor } from "./interceptors/current-user.interceptors";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, AuthService, {
    provide: APP_INTERCEPTOR,
    useClass: CurrentUserInterceptor,
  }],
})
export class UsersModule {}
