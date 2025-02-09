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
                    busStationId: new Types.ObjectId("67a343a4faf2ad6fe57314b8"),
                }, {
                    busStationId: new Types.ObjectId("67a343a5faf2ad6fe57314c0"),
                }, {
                    busStationId: new Types.ObjectId("67a343a3faf2ad6fe57314a0"),
                }, {
                    busStationId: new Types.ObjectId("67a343a3faf2ad6fe5731494"),
                }, {
                    busStationId: new Types.ObjectId("67a343a3faf2ad6fe5731498"),
                }
            ],
            distance: 200,
            distanceTime: "5h30",
        },
        {
            name: "Bà Rịa - An Giang",
            breakPoints: [
                {
                    busStationId: new Types.ObjectId("67a343a4faf2ad6fe57314b8"),
                }, {
                    busStationId: new Types.ObjectId("67a343a3faf2ad6fe5731494"),
                }, {
                    busStationId: new Types.ObjectId("67a343a3faf2ad6fe57314a0"),
                }, {
                    busStationId: new Types.ObjectId("67a343a5faf2ad6fe57314c0"),
                }, {
                    busStationId: new Types.ObjectId("67a343a3faf2ad6fe5731498"),
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
