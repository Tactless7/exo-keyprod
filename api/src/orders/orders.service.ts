import { Injectable } from '@nestjs/common';
import { Order, OrderStatus } from './entities/order.entity';
import { ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRepository: Repository<Order>,
  ) {}

  async getAllOrders() {
    return this.ordersRepository.find({ where: {}, relations: ['client'] });
  }

  async getFilteredOrders({
    clientId,
    clientSearch,
    status,
  }: {
    clientId?: number;
    clientSearch?: string;
    status?: OrderStatus;
  }) {
    console.log(clientSearch);
    const where = {
      ...(clientId && { client_id: clientId }),
      ...(status && { status }),
      ...(clientSearch && { client: { name: ILike(`%${clientSearch}%`) } }),
    };
    console.log(where);

    return this.ordersRepository.find({
      where,
      relations: ['client'],
    });
  }

  async getOneById(orderId: number) {
    return this.ordersRepository.findOne({
      where: { id: orderId },
      relations: ['client'],
    });
  }
}
