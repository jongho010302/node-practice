import { createConnection } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const { TYPEORM_CONNECTION,
        TYPEORM_HOST,
        TYPEORM_USERNAME,
        TYPEORM_PASSWORD,
        TYPEORM_DATABASE,
        TYPEORM_PORT,
        TYPEORM_ENTITIES,
        TYPEORM_SYNCHRONIZE } = process.env;

export default async (): Promise<any> => {
  try {
    await createConnection({
      type: TYPEORM_CONNECTION,
      host: TYPEORM_HOST,
      port: TYPEORM_PORT,
      username: TYPEORM_USERNAME,
      password: TYPEORM_PASSWORD,
      database: TYPEORM_DATABASE,
      entities: [ TYPEORM_ENTITIES ],
      logging: true,
      synchronize : TYPEORM_SYNCHRONIZE,
      namingStrategy: new SnakeNamingStrategy(),
    });
    console.log('Mariadb RDBMS connection is established');
  } catch (e) {
    console.log(e);
  }
}