import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // entities: [__dirname + '/*/entities/*.entity.{js,ts}'],
  entities: ['dist/src/*/entities/*.entity.{js,ts}'],
  migrations: ['dist/db/migrations/*.{js.ts}'],
  synchronize: true,
  // autoLoadEntities: true,
  logging: true,
  // keepConnectionAlive: true,
};
