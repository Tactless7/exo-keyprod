import {Order} from '../../../api/src/orders/entities/order.entity';

export interface Client {
  id: number;
  orders: Order[];
  order_ids: number[];
  name: string;
  siret: string;
  address_1: string;
  address_2?: string;
  zip_code: string;
  city: string;
  country: string;
  created_at: Date;
  updated_at: Date;
}
