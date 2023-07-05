import { Controller, Get, Param, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderStatus } from './entities/order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('')
  async getAllOrders(
    @Query('clientSearch') clientSearch?: string,
    @Query('status') status?: OrderStatus,
    @Query('clientId') clientId?: string,
  ) {
    if (!clientSearch && !clientId && !status)
      return this.ordersService.getAllOrders();
    else
      return this.ordersService.getFilteredOrders({
        clientId: +clientId,
        clientSearch,
        status,
      });
  }

  @Get(':id')
  async getById(@Param('id') orderId: string) {
    return this.ordersService.getOneById(+orderId);
  }
}
