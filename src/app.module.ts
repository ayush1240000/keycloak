
import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import * as IORedisStore from 'cache-manager-ioredis';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { RolesGuard } from './authentication/roles.guard';
import { APP_GUARD, RouterModule, Routes } from '@nestjs/core';
import { KeycloakModule } from './keycloak/keycloak.module';
import { LazyModule } from './lazy/lazy.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { ClientModule } from './client/client.module';




@Module({
   imports: [
    CacheModule.register({
      store: IORedisStore, // Use the ioredis store
      host: 'localhost', // Redis server host
      port: 6379, // Redis server port
      ttl: 300, // Time-to-live in seconds (5 minutes)
    }),
    UsersModule,
    KeycloakModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Auto-generate schema
      playground: true, // Disable deprecated GraphQL Playground
      // plugins: [require('@apollo/server-plugin-landing-page')], // Enable Apollo Explorer
    }),
    ClientModule
  ],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
    AppResolver,
  AppService],
  controllers:[AppController]
})
export class AppModule {}
