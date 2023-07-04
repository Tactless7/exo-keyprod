import { Seeder } from '@concepta/typeorm-seeding';
import { OrderFactory } from '../factories/order.factory';
import { AppDataSource } from '../app-datasource';

export class OrdersSeeder extends Seeder {
  async run(): Promise<void> {
    const orderFactory = this.factory(OrderFactory);

    const clients = await AppDataSource.manager.find('clients');

    await Promise.all(
      clients.map(async (client) => {
        await orderFactory.create({ client_id: client.id });
      }),
    );
  }
}
