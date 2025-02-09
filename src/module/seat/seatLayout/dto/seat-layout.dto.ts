import { Document } from 'mongoose';
import { SeatDto } from '../../seat/dto/seat.dto';

export class SeatLayoutDto extends Document {
    id: number;
    name: string;
    seats: SeatDto[];
}
