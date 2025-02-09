import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { FileUploadDocument, FileUploadSchema } from './schema/upload.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forFeature([{ name: FileUploadDocument.name, schema: FileUploadSchema }]),
    MongooseModule.forRoot(process.env.MONGODB_URI),
  ],
  providers: [UploadService],
  controllers: [UploadController],
})
export class UploadModule { }
