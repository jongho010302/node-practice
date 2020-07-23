declare namespace NodeJS
{

    // Merge the existing `ProcessEnv` definition with ours
    // https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
    export interface ProcessEnv
    {
      TYPEORM_CONNECTION: 'mariadb' | 'mysql';
      TYPEORM_PORT: number;
      TYPEORM_ENTITIES: string;
      TYPEORM_LOGGING: true;
      TYPEORM_SYNCHRONIZE: boolean;
      JWT_SECRET_KEY: string;
      S3_ACCESS_KEY: string;
      S3_SECRET_ACCESS_KEY: string;
      GMAIL_ACCOUNT: string;
      GMAIL_PASSWORD: string;
    }
}
