import * as express from 'express';
import * as serverless from 'serverless-http';
import { createServer } from '@/main';

const expressApp = express();

export const handler = async (event: unknown, context: unknown): Promise<unknown> => {
  await createServer(expressApp).then(app => app.init());

  const appHandler = serverless(expressApp);
  return appHandler(event, context);
};
