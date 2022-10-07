import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [__dirname + '/**/*.entity.ts'],
  synchronize: true,
  logging: true,
  migrations: [__dirname + '/migrations/**/*.ts'],
};

export default config;
