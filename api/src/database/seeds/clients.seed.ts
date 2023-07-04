import { Seeder } from '@concepta/typeorm-seeding';
import { ClientFactory } from '../factories/client.factory';

export class ClientsSeeder extends Seeder {
  async run(): Promise<void> {
    const clientFactory = this.factory(ClientFactory);

    await clientFactory.createMany(5);
  }
}
