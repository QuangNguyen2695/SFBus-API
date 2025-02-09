import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusTemplateController } from './bus-template.controller';
import { BusTemplateService } from './bus-template.service';
import { BusTemplateDocument, BusTemplateSchema } from './schema/bus-template.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: BusTemplateDocument.name, schema: BusTemplateSchema },
        ]),
    ],
    controllers: [BusTemplateController],
    providers: [BusTemplateService],
    exports: [BusTemplateService]
})

export class BusTemplateModule { }

