import { AppModule } from '@/app.module';
import { BusScheduleService } from '@/module/bus/bus-schedule/bus-schedule.service';
import { BusScheduleDto } from '@/module/bus/bus-schedule/dto/bus-schedule.dto';
import { NestFactory } from '@nestjs/core';
import { Types } from 'mongoose';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const busScheduleService = app.get(BusScheduleService);
    const now = new Date();

    const busSchedules: BusScheduleDto[] = [
        {
            busId: new Types.ObjectId('67a9fb1ef57019a8f8fd0a82'),
            busRouteId: new Types.ObjectId('67a87bf497d34a58cc4c5de0'),
            breakPointsTime: [
                {
                    busStationId: new Types.ObjectId('67a343a4faf2ad6fe57314b8'),
                    timeSchedule: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30, 0)
                },
                {
                    busStationId: new Types.ObjectId('67a343a5faf2ad6fe57314c0'),
                    timeSchedule: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30, 0)
                },
                {
                    busStationId: new Types.ObjectId('67a343a3faf2ad6fe57314a0'),
                    timeSchedule: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30, 0)
                },
                {
                    busStationId: new Types.ObjectId('67a343a3faf2ad6fe5731494'),
                    timeSchedule: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30, 0)
                },
                {
                    busStationId: new Types.ObjectId('67a343a3faf2ad6fe5731498'),
                    timeSchedule: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30, 0)
                }
            ],
            status: 'in_progress'
        }
    ];

    for (const busSchedule of busSchedules) {
        await busScheduleService.create(busSchedule);
    }
    await app.close();
}

bootstrap();
