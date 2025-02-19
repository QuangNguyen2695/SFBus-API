import { Exclude, Expose, Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";

export class BusTypeDto {
    @Expose()
    readonly _id: Types.ObjectId;

    @Expose()
    readonly name: String;

    @Exclude()
    createdAt: Date

    @Exclude()
    updatedAt: Date

    @Exclude()
    __v: number
}

export class SearchBusTypesQuery {
    @Type(() => Number)
    @IsNotEmpty()
    @IsInt()
    pageIdx: number;

    @Type(() => Number)
    @IsNotEmpty()
    @IsInt()
    pageSize: number;

    @IsOptional()
    @IsString()
    keyword: string;

    @IsOptional()
    @IsString()
    sortBy: string;

    @IsOptional()
    @IsString()
    filter: string;
}


export class SearchBusTypesRes {
    pageIdx: number = 0;
    busTypes: BusTypeDto[];
    totalPage: number = 0;
    totalItem: number = 0
}

