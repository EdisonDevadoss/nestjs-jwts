import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';

type JwtPayload = {
  sub: string;
  email: string;
};

@Injectable()
export class AtJwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'at-secret',
    });
  }

  validate(payload: JwtPayload) {
    console.log('payload', payload);
    return payload;
    // Under the hook express create the below statement. Attach payload with user object
    // req.user = payload
  }
}
