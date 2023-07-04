import { Factory } from '@concepta/typeorm-seeding';
import { Client } from '../../clients/entities/client.entity';
import { faker } from '@faker-js/faker/locale/fr';

export class ClientFactory extends Factory<Client> {
  protected options = {
    entity: Client,
  };

  protected async entity(entity?: Client): Promise<Client> {
    const client = new Client();

    client.name = faker.company.name();
    client.siret = Math.floor(Math.random() * 1000000000000).toString();
    client.zip_code = faker.location.zipCode();
    client.city = faker.location.city();
    client.country = faker.location.country();

    client.address_1 = faker.location.streetAddress();
    client.address_2 = faker.location.secondaryAddress();

    return client;
  }
}
