import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import * as cookieParser from 'cookie-parser';
import * as connectRedis from 'connect-redis';
import { createClient } from 'redis';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('Golden Shoe Api').build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     // transform: true,
  //     // whitelist: true,
  //     // forbidNonWhitelisted: true,
  //     // forbidUnknownValues: true,
  //   }),
  // );

  const RedisStore = connectRedis(session);
  let redisClient;

  if (process.env.NODE_ENV === 'production') {
    redisClient = createClient({
      legacyMode: true,
      url: process.env.REDIS_URL,
      socket: {
        tls: true,
        rejectUnauthorized: false,
      },
    });
  } else {
    redisClient = createClient({
      legacyMode: true,
    });
  }

  await redisClient
    .connect()
    .then(() => console.log('Redis connected.'))
    .catch(console.error);

  app.use(cookieParser());

  app.enableCors({
    origin: ['http://localhost:5173'],
    credentials: true,
  });

  app.use(
    session({
      name: 'GOLDEN_SHOE_SESSION_ID',
      store: new RedisStore({ client: redisClient as any, disableTouch: true }),
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 Year
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        httpOnly: true,
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
