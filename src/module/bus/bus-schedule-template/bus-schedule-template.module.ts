import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusScheduleTemplateController } from './bus-schedule-template.controller';
import { BusScheduleTemplateService } from './bus-schedule-template.service';
import { BusScheduleTemplateDocument, BusScheduleTemplateSchema } from './schema/bus-schedule-template.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: BusScheduleTemplateDocument.name, schema: BusScheduleTemplateSchema },
        ]),
    ],
    controllers: [BusScheduleTemplateController],
    providers: [BusScheduleTemplateService],
})

export class BusScheduleTemplateModule { }

