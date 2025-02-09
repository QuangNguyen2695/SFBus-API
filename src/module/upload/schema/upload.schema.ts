import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'fs.files', timestamps: true })
export class FileUploadDocument extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    length: number

    @Prop({ required: true })
    chunkSize: number

    @Prop({ required: true })
    filename: string

    @Prop({ required: true })
    md5: string

    @Prop({ required: true })
    contentType: string
}

export const FileUploadSchema = SchemaFactory.createForClass(FileUploadDocument);
