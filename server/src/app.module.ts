import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
