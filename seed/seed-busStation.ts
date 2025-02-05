import { BusStationService } from '../src/module/bus/bus-station/bus-station.service';
import { AppModule } from '../src/app.module';
import { NestFactory } from '@nestjs/core';
import { BusProvinceService } from '../src/module/bus/bus-province/bus-province.service';
import { CreateBusStationDto } from '../src/module/bus/bus-station/dto/create-bus-station.dto';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const busProvinceService = app.get(BusProvinceService);
    const busStationService = app.get(BusStationService);
    const provinces = await busProvinceService.findAll();


    const stations = provinces.flatMap(province => [
        {
            name: `Bến xe ${province.name}`,
            provinceId: province._id,
            detailAddress: `${province.name} - Address 1`
        },
        {
            name: `Văn Phòng ${province.name}`,
            provinceId: province._id,
            detailAddress: `${province.name} - Address 2`
        }
    ]) as CreateBusStationDto[];
    console.log("🚀 ~ bootstrap ~ stations:", stations)

    for (const station of stations) {
        await busStationService.create(station);
    }
    await app.close();
}

bootstrap();
