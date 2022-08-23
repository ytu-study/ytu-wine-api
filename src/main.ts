import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';

export const createServer = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = +process.env.PORT;
  await app.listen(port);

  Logger.log(`🚀 Server running on http://localhost:${port}`, 'Server');
};

createServer();
