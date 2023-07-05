import { Seeder } from '@concepta/typeorm-seeding';
import { OrderFactory } from '../factories/order.factory';
import { AppDataSource } from '../app-datasource';
import { Client } from '../../clients/entities/client.entity';

export class OrdersSeeder extends Seeder {
  async run(): Promise<void> {
    const orderFactory = this.factory(OrderFactory);

    const clients = await AppDataSource.manager.find('clients');

    await Promise.all(
      clients.map(async (client: Client) => {
        await orderFactory.create({ client });
      }),
    );
  }
}
