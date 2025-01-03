import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { KeycloakConnectModule, ResourceGuard, RoleGuard, AuthGuard } from 'nest-keycloak-connect';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8080/', // Replace with your Keycloak URL
      realm: 'nestjs-demo', // Replace with your realm
      clientId: 'demo-client', // Replace with your client ID
      secret: 'ZUSjqCbK2mZl79APQZjb0YloD23NxYPu', // Replace with your client secret
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard, // Protect all routes with Keycloak authentication
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard, // Protect all routes with Keycloak resource guard
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard, // Role-based access guard
    },
  ],
})
export class KeycloakModule {}
