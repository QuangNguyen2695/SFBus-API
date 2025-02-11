import { AppModule } from '@/app.module';
import { BusService } from '@/module/bus/bus/bus.service';
import { NestFactory } from '@nestjs/core';
import { Types } from 'mongoose';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const busService = app.get(BusService);

    const buses = [
        {
            name: 'Xe 01',
            description: 'test',
            busServiceIds: [
                new Types.ObjectId('67a87d962700d4adca8d4b36'),
                new Types.ObjectId('67a87d972700d4adca8d4b39'),
                new Types.ObjectId('67a87d972700d4adca8d4b3c'),
            ],
            busTypeId: new Types.ObjectId('67a874609aa5254189484c9c'),
            licensePlate: '66H1 90767',
            busTemplateId: new Types.ObjectId('67a9f822ab9f94403fe4d7b1')
        }
    ]

    for (const bus of buses) {
        await busService.create(bus);
    }
    await app.close();
}

bootstrap();
