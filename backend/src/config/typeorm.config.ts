import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'drowingduo',
  // entities: [__dirname + '/*/entities/*.entity.{js,ts}'],
  entities: ['dist/*/entities/*.entity.{js,ts}'],
  synchronize: true,
};
