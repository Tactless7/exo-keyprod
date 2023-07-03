import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from '../../orders/entities/order.entity';

@Entity({ name: 'clients' })
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name: 'order_ids' })
  @OneToMany(() => Order, (order) => order.client)
  orders: Order[];
  @RelationId((client: Client) => client.orders)
  order_ids: number[];

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true, unique: true })
  siret: string;

  @Column()
  address_1: string;

  @Column({ nullable: true })
  address_2: string;

  @Column()
  zip_code: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
