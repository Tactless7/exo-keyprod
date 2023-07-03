import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { Client } from '../../clients/entities/client.entity';

export enum OrderStatus {
  TO_BE_PROCESSED = 'TO_BE_PROCESSED',
  PROCESSING = 'PROCESSING',
  READY_TO_SEND = 'READY_TO_SEND',
  SENT = 'SENT',
  CANCELLED = 'CANCELLED',
}

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name: 'client_id' })
  @ManyToOne(() => Client, { onDelete: 'SET NULL' })
  client: Client;
  @RelationId((order: Order) => order.client)
  client_id: number;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.TO_BE_PROCESSED,
  })
  status: OrderStatus;

  @JoinColumn({ name: 'product_ids' })
  @OneToMany(() => Product, (product) => product.order)
  products: Product[];
  @RelationId((order: Order) => order.products)
  product_ids: number[];

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
