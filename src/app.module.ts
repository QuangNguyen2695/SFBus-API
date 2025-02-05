import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SeatTypeModule } from './module/seat/seat-type/seat-type.module';
import { BusProvinceModule } from './module/bus/bus-province/bus-province.module';
import { BusStationModule } from './module/bus/bus-station/bus-station.module';
import { BusServiceModule } from './module/bus/bus-service/bus-service.module';
import { UploadModule } from './module/upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    SeatTypeModule,
    BusProvinceModule,
    BusStationModule,
    BusServiceModule,
    UploadModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }