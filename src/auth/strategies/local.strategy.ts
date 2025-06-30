import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'Regid',   // Tell Passport to use Regid instead of default 'username'
      passwordField: 'password',
    });
  }

  async validate(Regid: string, password: string) {

    return this.authService.validateUser({ Regid: Number(Regid), password });
  }
}
