import { BusServiceService } from '../src/module/bus/bus-service/bus-service.service';
import { AppModule } from '../src/app.module';
import { NestFactory } from '@nestjs/core';
import { UploadService } from '@/module/upload/upload.service';
import * as fs from 'fs';
import * as path from 'path';
import FormData from 'form-data';
import { FastifyRequest } from 'fastify';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const busServiceService = app.get(BusServiceService);

    const busServices = [
        { name: "Water", icon: "http://localhost:8080/upload/view/67a3754584bc6c37fdbb9bd7" },
        { name: "Wifi", icon: "http://localhost:8080/upload/view/67a3754584bc6c37fdbb9bd9" },
        { name: "Towel", icon: "http://localhost:8080/upload/view/67a3754584bc6c37fdbb9bd8" },
    ];

    for (const busService of busServices) {
        await busServiceService.create(busService);
    }
    await app.close();
}

bootstrap();
