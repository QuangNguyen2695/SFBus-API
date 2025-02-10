import { AppModule } from '@/app.module';
import { BusScheduleService } from '@/module/bus/bus-schedule/bus-schedule.service';
import { BusScheduleDto, } from '@/module/bus/bus-schedule/dto/bus-schedule.dto';
import { BusTemplateDto, BusTemplateSeatDto, BusTemplateSeatLayoutDto } from '@/module/bus/bus-template/dto/bus-template.dto';
import { NestFactory } from '@nestjs/core';
import { Types } from 'mongoose';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const busScheduleService = app.get(BusScheduleService);
    const now = new Date();

    const seats1: BusTemplateSeatDto[] = [
        {
            index: 2,
            type: 3,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc6',
            status: 'available',
        },
        {
            index: 3,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 4,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 5,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 9,
            type: 1,
            name: 'A01',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 10,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 11,
            type: 1,
            name: 'A02',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 12,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 13,
            type: 1,
            name: 'A03',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 16,
            type: 1,
            name: 'A04',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 17,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 18,
            type: 1,
            name: 'A05',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 19,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 20,
            type: 1,
            name: 'A06',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 23,
            type: 1,
            name: 'A07',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 24,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 25,
            type: 1,
            name: 'A08',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 26,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 27,
            type: 1,
            name: 'A09',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 30,
            type: 1,
            name: 'A10',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 31,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 32,
            type: 1,
            name: 'A11',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 33,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 34,
            type: 1,
            name: 'A12',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 37,
            type: 1,
            name: 'A13',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 38,
            type: 1,
            name: 'A14',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 39,
            type: 1,
            name: 'A15',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 40,
            type: 1,
            name: 'A16',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 41,
            type: 1,
            name: 'A17',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        }
    ];

    const seats2: BusTemplateSeatDto[] = [
        {
            index: 2,
            type: 3,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc6',
            status: 'available',
        },
        {
            index: 3,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 4,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 5,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 9,
            type: 1,
            name: 'B01',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 10,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 11,
            type: 1,
            name: 'B02',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 12,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 13,
            type: 1,
            name: 'B03',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'block',
        },
        {
            index: 16,
            type: 1,
            name: 'B04',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 17,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 18,
            type: 1,
            name: 'B05',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'block',
        },
        {
            index: 19,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 20,
            type: 1,
            name: 'B06',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 23,
            type: 1,
            name: 'B07',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 24,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 25,
            type: 1,
            name: 'B08',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 26,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 27,
            type: 1,
            name: 'B09',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 30,
            type: 1,
            name: 'B10',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 31,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 32,
            type: 1,
            name: 'B11',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 33,
            type: 2,
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 34,
            type: 1,
            name: 'B12',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 37,
            type: 1,
            name: 'B13',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 38,
            type: 1,
            name: 'B14',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 39,
            type: 1,
            name: 'B15',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 40,
            type: 1,
            name: 'B16',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 41,
            type: 1,
            name: 'B17',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        }
    ]

    const seatLayouts: BusTemplateSeatLayoutDto[] = [
        { name: 'Tầng dưới', seats: seats1 },
        { name: 'Tầng trên', seats: seats2 }
    ]

    const busTemplate: BusTemplateDto = {
        name: 'Double Decker Template',
        seatLayouts: seatLayouts
    }

    const busSchedules: BusScheduleDto[] = [
        {
            busId: new Types.ObjectId('67a9fb1ef57019a8f8fd0a82'),
            busRouteId: new Types.ObjectId('67a87bf497d34a58cc4c5de0'),
            breakPointsTime: [
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
            busTemplatesId: new Types.ObjectId('67aa1e01cb2a364b458e7fd0'),
            busTemplates: busTemplate,
            price: 165000,
            status: 'in_progress'
        }
    ];

    for (const busSchedule of busSchedules) {
        await busScheduleService.create(busSchedule);
    }
    await app.close();
}

bootstrap();
