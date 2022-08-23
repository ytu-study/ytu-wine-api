import * as Joi from 'joi';
import { ConfigModuleOptions } from '@nestjs/config';

export const configOptions: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: ['.env', `.env.${process.env.NODE_ENV}`],
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test')
      .default('development'),
    PORT: Joi.number().default(3000),
    DB_URL: Joi.string().required(),
  }),
  validationOptions: { abortEarly: true },
};
