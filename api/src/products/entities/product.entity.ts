import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';
import { Parcel } from '../../parcels/entities/parcel.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  reference: string;

  @JoinColumn()
  @ManyToOne(() => Order)
  order: Order;
  @RelationId((product: Product) => product.order)
  order_id: number;

  @JoinColumn()
  @ManyToOne(() => Parcel)
  parcel: Parcel;
  @RelationId((product: Product) => product.parcel)
  parcel_id: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
