import { Args, Query, Resolver } from '@nestjs/graphql';

import { AuthService } from './auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query()
  async createToken(): Promise<any> {
    return await this.authService.createToken();
  }

  // async author(@Args('token') id: number) {
  //   return await this.authorsService.findOneById(id);
  // }

  // @ResolveProperty()
  // async posts(@Parent() author) {
  //   const { id } = author;
  //   return await this.postsService.findAll({ authorId: id });
  // }
}
