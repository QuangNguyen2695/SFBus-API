import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BusProvinceModule } from './module/bus/bus-province/bus-province.module';
import { BusStationModule } from './module/bus/bus-station/bus-station.module';
import { BusServiceModule } from './module/bus/bus-service/bus-service.module';
import { UploadModule } from './module/upload/upload.module';
import { BusRouteModule } from './module/bus/bus-route/bus-route.module';
import { BusScheduleModule } from './module/bus/bus-schedule/bus-schedule.module';
import { BusTemplateModule } from './module/bus/bus-template/bus-template.module';
import { AuthModule } from './module/auth/auth.module';
import { UserModule } from './module/user/user/user.module';
import { BusModule } from './module/bus/bus/bus.module';
import { BusTypeModule } from './module/bus/bus-type/bus-type.module';
import { BusScheduleTemplateModule } from './module/bus/bus-schedule-template/bus-schedule-template.module';
import { SeatTypeModule } from './module/seat/seat-type/seat-type.module';

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
    BusTypeModule,
    BusProvinceModule,
    BusStationModule,
    BusServiceModule,
    UploadModule,
    BusRouteModule,
    BusScheduleModule,
    BusScheduleTemplateModule,
    BusTemplateModule,
    UserModule,
    AuthModule,
    BusModule,
    SeatTypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }