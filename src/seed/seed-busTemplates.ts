import { AppModule } from '@/app.module';
import { BusTemplateService } from '@/module/bus/bus-template/bus-template.service';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const busTemplateService = app.get(BusTemplateService);


    const seats1 = [
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
    ]

    const seats2 = [
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
