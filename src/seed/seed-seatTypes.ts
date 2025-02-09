import { AppModule } from '@/app.module';
import { SeatTypeService } from '@/module/seat/seat-type/seat-type.service';
import { NestFactory } from '@nestjs/core';

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
