import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) private clientsRepository: Repository<Client>,
  ) {}

  async getAllClients() {
    return this.clientsRepository.find();
  }
}
