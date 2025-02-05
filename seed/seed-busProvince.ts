import { BusProvinceService } from '../src/module/bus/bus-province/bus-province.service';
import { AppModule } from '../src/app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const busProvinceService = app.get(BusProvinceService);

    const busProvinces = [
        { name: "Đà Nẵng" },
        { name: "Quảng Nam" },
        { name: "Quảng Ngãi" },
        { name: "Bình Định" },
        { name: "Phú Yên" },
        { name: "Khánh Hòa" },
        { name: "Ninh Thuận" },
        { name: "Bình Thuận" },
        { name: "Kon Tum" },
        { name: "Gia Lai" },
        { name: "Đắk Lắk" },
        { name: "Đắk Nông" },
        { name: "Lâm Đồng" },
        { name: "Bình Phước" },
        { name: "Tây Ninh" },
        { name: "Bình Dương" },
        { name: "Đồng Nai" },
        { name: "Bà Rịa - Vũng Tàu" },
        { name: "Hồ Chí Minh" },
        { name: "Long An" },
        { name: "Tiền Giang" },
        { name: "Bến Tre" },
        { name: "Trà Vinh" },
        { name: "Vĩnh Long" },
        { name: "Đồng Tháp" },
        { name: "An Giang" },
        { name: "Kiên Giang" },
        { name: "Cần Thơ" },
        { name: "Hậu Giang" },
        { name: "Sóc Trăng" },
        { name: "Bạc Liêu" },
        { name: "Cà Mau" }
    ];

    for (const busProvince of busProvinces) {
        await busProvinceService.create(busProvince);
    }
    await app.close();
}

bootstrap();
