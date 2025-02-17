import { AppModule } from '@/app.module';
import { BusServiceService } from '@/module/bus/bus-service/bus-service.service';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const busServiceService = app.get(BusServiceService);

    const busServices = [
        { name: "Water", icon: "http://192.168.1.6:8080/upload/view/67a3754584bc6c37fdbb9bd7" },
        { name: "Wifi", icon: "http://192.168.1.6:8080/upload/view/67a3754584bc6c37fdbb9bd9" },
        { name: "Towel", icon: "http://192.168.1.6:8080/upload/view/67a3754584bc6c37fdbb9bd8" },
    ];

    for (const busService of busServices) {
        await busServiceService.create(busService);
    }
    await app.close();
}

bootstrap();
