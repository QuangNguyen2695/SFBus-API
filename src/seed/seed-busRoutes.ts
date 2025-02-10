import { AppModule } from "@/app.module";
import { BusRouteService } from "@/module/bus/bus-route/bus-route.service";
import { NestFactory } from "@nestjs/core";
import { Types } from "mongoose";
async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const busRouteService = app.get(BusRouteService);

    const busRoutes = [
        {
            name: "An Giang - Bà Rịa",
            breakPoints: [
                {
                    busStationId: new Types.ObjectId("67a87d9a2700d4adca8d4b9d"),
                }, {
                    busStationId: new Types.ObjectId("67a87d9a2700d4adca8d4ba5"),
                }, {
                    busStationId: new Types.ObjectId("67a87d992700d4adca8d4b85"),
                }, {
                    busStationId: new Types.ObjectId("67a87d992700d4adca8d4b81"),
                }, {
                    busStationId: new Types.ObjectId("67a87d992700d4adca8d4b7d"),
                }
            ],
            distance: 200,
            distanceTime: "5h30",
        },
        {
            name: "Bà Rịa - An Giang",
            breakPoints: [
                {
                    busStationId: new Types.ObjectId("67a87d992700d4adca8d4b7d"),
                }, {
                    busStationId: new Types.ObjectId("67a87d992700d4adca8d4b81"),
                }, {
                    busStationId: new Types.ObjectId("67a87d992700d4adca8d4b85"),
                }, {
                    busStationId: new Types.ObjectId("67a87d9a2700d4adca8d4ba5"),
                }, {
                    busStationId: new Types.ObjectId("67a87d9a2700d4adca8d4b9d"),
                }
            ],
            distance: 200,
            distanceTime: "5h30",
        },

    ];
    console.log("🚀 ~ bootstrap ~ busRoutes:", busRoutes)
    for (const busRoute of busRoutes) {
        await busRouteService.create(busRoute);
    }
    await app.close();
}

bootstrap();
