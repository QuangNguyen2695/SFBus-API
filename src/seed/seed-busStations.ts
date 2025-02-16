import { AppModule } from '@/app.module';
import { BusProvinceService } from '@/module/bus/bus-province/bus-province.service';
import { BusStationService } from '@/module/bus/bus-station/bus-station.service';
import { CreateBusStationDto } from '@/module/bus/bus-station/dto/create-bus-station.dto';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const busProvinceService = app.get(BusProvinceService);
    const busStationService = app.get(BusStationService);
    const provinces = await busProvinceService.findAll();


    const stations = provinces.flatMap(province => [
        {
            name: `Bến xe ${province.name}`,
            provinceId: province._id,
            detailAddress: `${province.name} - Address 1`,
            location: '106.700981, 10.773456',
        },
        {
            name: `Văn Phòng ${province.name}`,
            provinceId: province._id,
            detailAddress: `${province.name} - Address 2`,
            location: '106.700981, 10.773456',
        }
    ]) as CreateBusStationDto[];

    for (const station of stations) {
        await busStationService.create(station);
    }
    await app.close();
}

bootstrap();
