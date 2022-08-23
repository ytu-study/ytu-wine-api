import { INestApplication } from '@nestjs/common';
import * as express from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';
import * as serverless from 'serverless-http';
import { createServer } from '@/main';

const functionsName = readdirSync(join(__dirname)).find((name) => name.includes('js')) ?? 'api';
const GLOBAL_PREFIX = functionsName.replace(/\.js/, '');

const expressApp = express();

export const handler = async (event: unknown, context: unknown): Promise<unknown> => {
  const app: INestApplication = await createServer(expressApp);

  await app.setGlobalPrefix(`.netlify/functions/${GLOBAL_PREFIX}`).init();

  const appHandler = serverless(expressApp);
  return appHandler(event, context);
};
