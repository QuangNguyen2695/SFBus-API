import { AppModule } from '@/app.module';
import { PaymentMethodService } from '@/module/booking/payment-method/payment-method-service';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);

    const paymentMethodService = app.get(PaymentMethodService);

    const paymentMethods = [
        {
            name: "Thẻ ATM",
            type: "card",
            status: true,
            icon: "http://localhost:8080/upload/view/67b1f1420affdee75bed86fd"
        },
        {
            name: "Thẻ Visa/Master/JCB",
            type: "card",
            status: true,
            icon: "http://localhost:8080/upload/view/67b1f1420affdee75bed86fe"
        },
        {
            name: "SFPay",
            type: "banking",
            status: true,
            banking: {
                bankName: "SFPay",
                accountNumber: "123456789",
                accountName: "SFPay"
            },
            icon: "http://localhost:8080/upload/view/67b1f1420affdee75bed8700",
            isDefault: true
        },
        {
            name: "Momo",
            type: "banking",
            status: true,
            banking: {
                bankName: "Momo",
                accountNumber: "123456789",
                accountName: "Momo"
            },
            icon: "http://localhost:8080/upload/view/67b1f1420affdee75bed86ff"
        },
        {
            name: "ZaloPay",
            type: "banking",
            status: true,
            banking: {
                bankName: "ZaloPay",
                accountNumber: "123456789",
                accountName: "ZaloPay"
            },
            icon: "http://localhost:8080/upload/view/67b1f1420affdee75bed8702"
        },
        {
            name: "VNPay",
            type: "banking",
            status: true,
            banking: {
                bankName: "VNPay",
                accountNumber: "123456789",
                accountName: "VNPay"
            },
            icon: "http://localhost:8080/upload/view/67b1f1420affdee75bed8701"
        },
    ]

    for (const paymentMethod of paymentMethods) {
        await paymentMethodService.create(paymentMethod);
    }
    await app.close();
}

bootstrap();
