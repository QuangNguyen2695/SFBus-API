import { Types } from "mongoose";

import { IsArray, isArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBusDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  licensePlate: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  busTemplate: Types.ObjectId;

  @IsNotEmpty()
  @IsArray()
  readonly serviceids: Types.ObjectId[];

  @IsNotEmpty()
  @IsString()
  readonly seatTypeId: Types.ObjectId;
}

