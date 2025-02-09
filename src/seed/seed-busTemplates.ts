import { AppModule } from '@/app.module';
import { BusTemplateService } from '@/module/bus/bus-template/bus-template.service';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const busTemplateService = app.get(BusTemplateService);

    const busTemplate = {
        "name": "Double Decker Template",
        "seatLayouts": ["SeatLayoutID1", "SeatLayoutID2"]
    }

    await busTemplateService.create(busTemplate);
    await app.close();
}

bootstrap();
