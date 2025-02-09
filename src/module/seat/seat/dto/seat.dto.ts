import { Document } from 'mongoose';

export class SeatDto extends Document {
    id: string;
    value: number;
    type: number;
    isEditing?: boolean;
    name?: string;
    icon?: string;
    status?: string;
}
