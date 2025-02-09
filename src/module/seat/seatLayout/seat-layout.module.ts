// seat-layout.module.ts

import { Module } from '@nestjs/common';
import { SeatLayoutService } from './seat-layout.service';
import { SeatLayoutController } from './seat-layout.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SeatModule } from '../seat/seat.module';
import { SeatLayoutDocument, SeatLayoutSchema } from './schema/seat-layout.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: SeatLayoutDocument.name, schema: SeatLayoutSchema },
        ]),
        SeatModule,
    ],
    controllers: [SeatLayoutController],
    providers: [SeatLayoutService],
    exports: [SeatLayoutService],
})
export class SeatLayoutModule { }
