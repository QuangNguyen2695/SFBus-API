import { AppModule } from '@/app.module';
import { BusScheduleService } from '@/module/bus/bus-schedule/bus-schedule.service';
import { CreateBusScheduleDto } from '@/module/bus/bus-schedule/dto/create-bus-schedule.dto';
import { NestFactory } from '@nestjs/core';
import { Types } from 'mongoose';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const busScheduleService = app.get(BusScheduleService);
    const now = new Date();

    const baseTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0); // Start from 12 PM (noon)

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
                        province: {
                            _id: new Types.ObjectId('67a87bd07f8e7fc09cc679a3'),
                            name: 'An Giang'
                        },
                        timeSchedule: new Date(baseTime.getTime() + 0 * 30 * 60 * 1000) // 12:00 PM
                    },
                    {
                        busStationId: new Types.ObjectId('67a87d9a2700d4adca8d4ba5'),
                        name: "Bến xe Cần Thơ",
                        detailAddress: "Cần Thơ - Address 1",
                        location: '',
                        provinceId: new Types.ObjectId('67a87bd07f8e7fc09cc679a7'),
                        province: {
                            _id: new Types.ObjectId('67a87bd07f8e7fc09cc679a7'),
                            name: 'Cần Thơ'
                        },
                        timeSchedule: new Date(baseTime.getTime() + 1 * 30 * 60 * 1000) // 12:30 PM
                    },
                    {
                        busStationId: new Types.ObjectId('67a87d992700d4adca8d4b85'),
                        name: "Bến xe Long An",
                        detailAddress: "Long An - Address 1",
                        location: '',
                        provinceId: new Types.ObjectId('67a87bd07f8e7fc09cc67997'),
                        province: {
                            _id: new Types.ObjectId('67a87bd07f8e7fc09cc67997'),
                            name: 'Long An'
                        },
                        timeSchedule: new Date(baseTime.getTime() + 2 * 30 * 60 * 1000) // 1:00 PM
                    },
                    {
                        busStationId: new Types.ObjectId('67a87d992700d4adca8d4b81'),
                        name: "Bến xe Hồ Chí Minh",
                        detailAddress: "Hồ Chí Minh - Address 1",
                        location: '',
                        provinceId: new Types.ObjectId('67a87bd07f8e7fc09cc67995'),
                        province: {
                            _id: new Types.ObjectId('67a87bd07f8e7fc09cc67997'),
                            name: 'Hồ Chí Minh'
                        },
                        timeSchedule: new Date(baseTime.getTime() + 3 * 30 * 60 * 1000) // 1:30 PM
                    },
                    {
                        busStationId: new Types.ObjectId('67a87d992700d4adca8d4b7d'),
                        name: "Bến xe Bà Rịa - Vũng Tàu",
                        detailAddress: "Bà Rịa - Vũng Tàu - Address 1",
                        location: '',
                        provinceId: new Types.ObjectId('67a87bd07f8e7fc09cc67993'),
                        province: {
                            _id: new Types.ObjectId('67a87bd07f8e7fc09cc67993'),
                            name: 'Bà Rịa - Vũng Tàu'
                        },
                        timeSchedule: new Date(baseTime.getTime() + 4 * 30 * 60 * 1000) // 2:00 PM
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
