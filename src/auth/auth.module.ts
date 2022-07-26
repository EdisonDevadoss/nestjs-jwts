import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AtJwtStrategy, RtJwtStrategy } from './strategies';

@Module({
  imports:[
    JwtModule.register({
      
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, AtJwtStrategy, RtJwtStrategy],
})
export class AuthModule {}
