import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'notifications', timestamps: true })
export class NotificationDocument extends Document {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    desc: string;
}

export const NotificationSchema = SchemaFactory.createForClass(NotificationDocument);
