import { Factory } from '@concepta/typeorm-seeding';
import { Order } from 'src/orders/entities/order.entity';

export class OrderFactory extends Factory<Order> {
  protected options = {
    entity: Order,
  };

  protected async entity(order: Order): Promise<Order> {
    return order;
  }
}
