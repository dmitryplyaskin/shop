import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  // @Query()
  // async createToken(): Promise<any> {
  //   return await this.authService.createToken();
  // }
  //@UseGuards(AuthGuard)
  @Mutation('createToken')
  async createToken(@Args('createUserInput')
  args: {
    email: string;
    password: string;
  }): Promise<any> {
    return await this.authService.createToken(args);
  }
}
