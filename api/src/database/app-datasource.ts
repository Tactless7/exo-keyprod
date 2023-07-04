import { DataSource } from 'typeorm';
import config from '../config';

export const AppDataSource = new DataSource({
  type: config().typeorm.type as 'postgres' | 'mysql',
  host: config().db.host,
  port: config().db.port,
  username: config().db.username,
  password: config().db.password,
  database: config().db.name,
  synchronize: config().typeorm.synchronize,
  entities: ['dist/**/entities/*{.ts,.js}'],
});
