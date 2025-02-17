import { AppModule } from '@/app.module';
import { NestFactory } from '@nestjs/core';
import { SeatTypeService } from '@/module/seat/seat-type/seat-type.service';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const seatTypeService = app.get(SeatTypeService);

    const SeatTypes = [
        {
            name: "Ghế",
            icon: "http://192.168.1.6/upload/view/67a9e33b84b85d1c30199dc7",
            blockIcon: "http://192.168.1.6/upload/view/67a9e33b84b85d1c30199dc8",
            selectedIcon: "http://192.168.1.6/upload/view/67a9e33b84b85d1c30199dc9",
            isChoose: true,
        },
        {
            name: "Hành lang",
            icon: "http://192.168.1.6/upload/view/67a9e33b84b85d1c30199dca",
            blockIcon: "",
            selectedIcon: "",
            isChoose: false,
        },
        {
            name: "Tài xế",
            icon: "http://192.168.1.6/upload/view/67a9e33b84b85d1c30199dc6",
            blockIcon: "",
            selectedIcon: "",
            isChoose: false,
        }
    ]

    for (const SeatType of SeatTypes) {
        await seatTypeService.create(SeatType);
    }
    await app.close();
}

bootstrap();
