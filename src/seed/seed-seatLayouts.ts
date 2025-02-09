import { NestFactory } from '@nestjs/core';
import { SeatLayoutService } from '@/module/seat/seatLayout/seat-layout.service';
import { AppModule } from '@/app.module';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const seatLayoutService = app.get(SeatLayoutService);

    // const seatLayout = [
    //     {
    //         name: "Ghế",
    //     },
    //     {
    //         name: "Giường",
    //     },
    //     {
    //         name: "limousine",
    //     }
    // ]


    // for (const seatType of seatTypes) {
    //     await seatLayoutService.create(seatType);
    // }
    await app.close();
}

bootstrap();
