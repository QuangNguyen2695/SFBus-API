import { AppModule } from '../src/app.module';
import { BusService } from '../src/module/bus/bus/bus.service';
import { SeatTypeService } from '../src/module/seat/seat-type/seat-type.service';
import { NestFactory } from '@nestjs/core';
import { v4 as uuidv4 } from 'uuid';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const seatTypeService = app.get(SeatTypeService);

    const seatTypes = [
        {
            name: "Ghế",
        },
        {
            name: "Giường",
        },
        {
            name: "limousine",
        }
    ]


    for (const seatType of seatTypes) {
        await seatTypeService.create(seatType);
    }
    await app.close();
}

bootstrap();
