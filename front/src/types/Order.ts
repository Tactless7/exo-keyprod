import {Client} from './Client';
import {Product} from '../../../api/src/products/entities/product.entity';

export enum OrderStatus {
  TO_BE_PROCESSED = 'TO_BE_PROCESSED',
  PROCESSING = 'PROCESSING',
  READY_TO_SEND = 'READY_TO_SEND',
  SENT = 'SENT',
  CANCELLED = 'CANCELLED',
}

export interface Order {
  id: number;
  client: Client;
  client_id: number;
  status: OrderStatus;
  products: Product[];
  product_ids: number[];
  created_at: Date;
  updated_at: Date;
}
