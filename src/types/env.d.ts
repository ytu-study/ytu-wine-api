declare namespace NodeJS {
  interface Process {
  }

  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT: string;
    DB_URL: string;
  }
}