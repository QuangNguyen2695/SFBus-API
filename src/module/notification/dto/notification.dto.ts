import { Exclude, Expose } from "class-transformer";
import { Types } from "mongoose";

export class NotificationDto {
    @Exclude()
    title: string;

    @Exclude()
    desc: string;

    @Exclude()
    createdAt: Date

    @Exclude()
    updatedAt: Date

    @Exclude()
    __v: number
}