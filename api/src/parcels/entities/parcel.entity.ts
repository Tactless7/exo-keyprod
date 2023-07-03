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
import { Product } from '../../products/entities/product.entity';

@Entity({ name: 'parcels' })
export class Parcel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  tracking_number: string;

  @JoinColumn()
  @OneToMany(() => Product, (product) => product.order)
  products: Product[];
  @RelationId((parcel: Parcel) => parcel.products)
  product_ids: number[];

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
