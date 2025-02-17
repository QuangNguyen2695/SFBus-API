import { AppModule } from '@/app.module';
import { BusTemplateService } from '@/module/bus/bus-template/bus-template.service';
import { NestFactory } from '@nestjs/core';
import { Types } from 'mongoose';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const busTemplateService = app.get(BusTemplateService);


    const seats1 = [
        {
            index: 2,
            type: new Types.ObjectId('67adb8234c4534c63974de4f'),
            name: '',
            status: 'available',
        },
        {
            index: 3,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 4,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 5,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 9,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A01',
            status: 'available',
        },
        {
            index: 10,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 11,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A02',
            status: 'available',
        },
        {
            index: 12,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 13,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A03',
            status: 'available',
        },
        {
            index: 16,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A04',
            status: 'available',
        },
        {
            index: 17,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 18,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A05',
            status: 'available',
        },
        {
            index: 19,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 20,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A06',
            status: 'available',
        },
        {
            index: 23,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A07',
            status: 'available',
        },
        {
            index: 24,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 25,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A08',
            status: 'available',
        },
        {
            index: 26,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 27,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A09',
            status: 'available',
        },
        {
            index: 30,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A10',
            status: 'available',
        },
        {
            index: 31,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 32,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A11',
            status: 'available',
        },
        {
            index: 33,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 34,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A12',
            status: 'available',
        },
        {
            index: 37,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A13',
            status: 'available',
        },
        {
            index: 38,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A14',
            status: 'available',
        },
        {
            index: 39,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A15',
            status: 'available',
        },
        {
            index: 40,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A16',
            status: 'available',
        },
        {
            index: 41,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A17',
            status: 'available',
        }
    ]

    const seats2 = [
        {
            index: 2,
            type: new Types.ObjectId('67adb8234c4534c63974de4f'),
            name: '',
            status: 'available',
        },
        {
            index: 3,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 4,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 5,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 9,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B01',
            status: 'available',
        },
        {
            index: 10,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 11,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B02',
            status: 'available',
        },
        {
            index: 12,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 13,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B03',
            status: 'block',
        },
        {
            index: 16,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B04',
            status: 'available',
        },
        {
            index: 17,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 18,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B05',
            status: 'block',
        },
        {
            index: 19,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 20,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B06',
            status: 'available',
        },
        {
            index: 23,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B07',
            status: 'available',
        },
        {
            index: 24,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 25,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B08',
            status: 'available',
        },
        {
            index: 26,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 27,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B09',
            status: 'available',
        },
        {
            index: 30,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B10',
            status: 'available',
        },
        {
            index: 31,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 32,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B11',
            status: 'available',
        },
        {
            index: 33,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            status: 'available',
        },
        {
            index: 34,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B12',
            status: 'available',
        },
        {
            index: 37,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B13',
            status: 'available',
        },
        {
            index: 38,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B14',
            status: 'available',
        },
        {
            index: 39,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B15',
            status: 'available',
        },
        {
            index: 40,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B16',
            status: 'available',
        },
        {
            index: 41,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B17',
            status: 'available',
        }
    ]


    const busTemplate = {
        name: 'Double Decker Template',
        seatLayouts: [
            { name: 'Tầng dưới', seats: seats1 },
            { name: 'Tầng trên', seats: seats2 }
        ]
    }

    await busTemplateService.create(busTemplate);
    await app.close();
}

bootstrap();
