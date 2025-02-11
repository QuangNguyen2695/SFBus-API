import { AppModule } from '@/app.module';
import { BusTypeService } from '@/module/bus/bus-type/bus-type.service';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const busTypeService = app.get(BusTypeService);

    const busTypes = [
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

    for (const busType of busTypes) {
        await busTypeService.create(busType);
    }
    await app.close();
}

bootstrap();
