import * as KeycloakConnect from 'keycloak-connect';

export const keycloakConfig: KeycloakConnect.KeycloakConfig = {
  'auth-server-url': 'http://localhost:8080',
  realm: 'nestjs-demo',
  "bearer-only" : true,
  resource: 'nestjs-app-admin', // This is the clientId
  'ssl-required': 'none',
  'confidential-port': 0,
};

