import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { Express } from 'express';
import { AppModule } from '@/app.module';

export const createServer = async (expressApp?: Express): Promise<INestApplication> => {
  let app: INestApplication;
  if (expressApp) {
    app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp), { cors: true });
    return app.init();
  }
  app = await NestFactory.create(AppModule, expressApp ? new ExpressAdapter(expressApp) : undefined, { cors: true });

  const port = +process.env.PORT;
  await app.listen(port);

  Logger.log(`🚀 Server running on http://localhost:${port}`, 'Server');

  return app;
};

createServer();
