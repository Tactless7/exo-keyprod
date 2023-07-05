import { Factory } from '@concepta/typeorm-seeding';
import { Product } from '../../products/entities/product.entity';

export class ProductFactory extends Factory<Product> {
  protected options = {
    entity: Product,
  };

  protected async entity(entity?: Product): Promise<Product> {
    const product = new Product();

    // TODO: create fake data for product
    return product;
  }
}
