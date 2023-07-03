import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { ClientsModule } from './clients/clients.module';
import { ProductsModule } from './products/products.module';
import { ParcelsModule } from './parcels/parcels.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: config().typeorm.type as 'postgres' | 'mysql', // WORKAROUND for type
        host: config().db.host,
        port: config().db.port,
        username: config().db.username,
        password: config().db.password,
        database: config().db.name,
        synchronize: config().typeorm.synchronize,
        autoLoadEntities: true,
        migrationsTableName: 'migrations_typeorm',
        migrations: ['dist/database/migrations/*{.ts,.js}'],
        migrationsRun: config().typeorm.migrationsRun,
      }),
    }),
    OrdersModule,
    ClientsModule,
    ProductsModule,
    ParcelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
