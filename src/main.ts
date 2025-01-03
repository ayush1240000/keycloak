import { LazyModuleLoader, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as KeycloakConnect from 'keycloak-connect';
import { keycloakConfig } from 'keycloak-config';
// import { NestKeycloakMiddleware } from 'nest-keycloak-connect';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const lazyModuleLoader = app.get(LazyModuleLoader);
// "app" represents a Nest application instance



  // Correctly initialize MemoryStore
  // const memoryStore = new session.MemoryStore();
  // const keycloak = new KeycloakConnect({ store: memoryStore }, keycloakConfig);

  // app.use(
  //   session({
  //     secret: 'i1KHZFYBBWRhXKruoMtIRT15tCLsFVmJ',
  //     resave: false,
  //     saveUninitialized: true,
  //     store: memoryStore,
  //   }),
  // );
  // app.use(NestKeycloakMiddleware);
    // Enable global validation pipes, if needed
    // app.useGlobalPipes(new ValidationPipe());

  // app.use(keycloak.middleware());

  await app.listen(3000);
}
bootstrap();
