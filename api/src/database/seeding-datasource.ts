import { SeedingSource } from '@concepta/typeorm-seeding';
import { OrdersSeeder } from './seeds/orders.seed';
import { ClientsSeeder } from './seeds/clients.seed';
import { AppDataSource } from './app-datasource';

module.exports = new SeedingSource({
  dataSource: AppDataSource,
  seeders: [ClientsSeeder, OrdersSeeder],
});
