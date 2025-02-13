import { AppModule } from '@/app.module';
import { BusScheduleService } from '@/module/bus/bus-schedule/bus-schedule.service';
import { BusScheduleDto, } from '@/module/bus/bus-schedule/dto/bus-schedule.dto';
import { CreateBusScheduleDto } from '@/module/bus/bus-schedule/dto/create-bus-schedule.dto';
import { BusTemplateDto, BusTemplateSeatDto, BusTemplateSeatLayoutDto } from '@/module/bus/bus-template/dto/bus-template.dto';
import { NestFactory } from '@nestjs/core';
import { Types } from 'mongoose';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const busScheduleService = app.get(BusScheduleService);
    const now = new Date();

    const busSchedules: CreateBusScheduleDto[] = [
        {
            busId: new Types.ObjectId('67a9fb1ef57019a8f8fd0a82'),
            busRouteId: new Types.ObjectId('67a87bf497d34a58cc4c5de0'),
            busRoute: {
                name: 'An Giang - Bà Rịa',
                distance: 200,
                distanceTime: '5h30',
                breakPoints: [
                    {
                        busStationId: new Types.ObjectId('67a87d9a2700d4adca8d4b9d'),
                        name: "Bến xe An Giang",
                        detailAddress: "An Giang - Address 1",
                        location: '',
                        provinceId: new Types.ObjectId('67a87bd07f8e7fc09cc679a3'),
                        timeSchedule: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30, 0)
                    },
                    {
                        busStationId: new Types.ObjectId('67a87d9a2700d4adca8d4ba5'),
                        name: "Bến xe Cần Thơ",
                        detailAddress: "Cần Thơ - Address 1",
                        location: '',
                        provinceId: new Types.ObjectId('67a87bd07f8e7fc09cc679a7'),
                        timeSchedule: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30, 0)
                    },
                    {
                        busStationId: new Types.ObjectId('67a87d992700d4adca8d4b85'),
                        name: "Bến xe Long An",
                        detailAddress: "Long An - Address 1",
                        location: '',
                        provinceId: new Types.ObjectId('67a87bd07f8e7fc09cc67997'),
                        timeSchedule: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30, 0)
                    },
                    {
                        busStationId: new Types.ObjectId('67a87d992700d4adca8d4b81'),
                        name: "Bến xe Hồ Chí Minh",
                        detailAddress: "Hồ Chí Minh - Address 1",
                        location: '',
                        provinceId: new Types.ObjectId('67a87bd07f8e7fc09cc67995'),
                        timeSchedule: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30, 0)
                    },
                    {
                        busStationId: new Types.ObjectId('67a87d992700d4adca8d4b7d'),
                        name: "Bến xe Bà Rịa - Vũng Tàu",
                        detailAddress: "Bà Rịa - Vũng Tàu - Address 1",
                        location: '',
                        provinceId: new Types.ObjectId('67a87bd07f8e7fc09cc67993'),
                        timeSchedule: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30, 0)
                    }
                ],
            },
            busScheduleTemplateId: new Types.ObjectId('67aa1e01cb2a364b458e7fd0'),
            price: 165000,
            remainSeat: 6,
            status: 'in_progress'
        }
    ];

    for (const busSchedule of busSchedules) {
        await busScheduleService.create(busSchedule);
    }
    await app.close();
}

bootstrap();
