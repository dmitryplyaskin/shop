import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('login')
  async authentication(@Args('createLoginInput')
  args: {
    email: string;
    password: string;
  }): Promise<any> {
    return await this.authService.createToken(args);
  }
  @Mutation('register')
  async registration(@Args('createRegisterInput')
  args: {
    email: string;
    password: string;
    name: string;
  }): Promise<any> {
    return await this.authService.createToken(args);
  }
}
