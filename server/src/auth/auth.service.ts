import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken({ email, password }: { email: string; password: string }) {
    const user: JwtPayload = { email };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: 3600,
      accessToken,
      email: email,
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // put some validation logic here
    // for example query user by id/email/username
    return { a: 123 };
  }
}
