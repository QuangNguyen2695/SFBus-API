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
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc6',
            status: 'available',
        },
        {
            index: 3,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 4,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 5,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 9,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A01',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 10,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 11,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A02',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 12,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 13,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A03',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 16,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A04',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 17,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 18,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A05',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 19,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 20,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A06',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 23,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A07',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 24,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 25,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A08',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 26,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 27,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A09',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 30,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A10',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 31,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 32,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A11',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 33,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 34,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A12',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 37,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A13',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 38,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A14',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 39,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A15',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 40,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A16',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 41,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'A17',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        }
    ]

    const seats2 = [
        {
            index: 2,
            type: new Types.ObjectId('67adb8234c4534c63974de4f'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc6',
            status: 'available',
        },
        {
            index: 3,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 4,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 5,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 9,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B01',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 10,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 11,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B02',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 12,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 13,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B03',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'block',
        },
        {
            index: 16,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B04',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 17,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 18,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B05',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'block',
        },
        {
            index: 19,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 20,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B06',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 23,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B07',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 24,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 25,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B08',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 26,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 27,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B09',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 30,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B10',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 31,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 32,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B11',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 33,
            type: new Types.ObjectId('67adb8234c4534c63974de4d'),
            name: '',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dca',
            status: 'available',
        },
        {
            index: 34,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B12',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 37,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B13',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 38,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B14',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 39,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B15',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 40,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B16',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
            status: 'available',
        },
        {
            index: 41,
            type: new Types.ObjectId('67adb8234c4534c63974de4a'),
            name: 'B17',
            icon: 'http://localhost:8080/upload/view/67a9e33b84b85d1c30199dc7',
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
