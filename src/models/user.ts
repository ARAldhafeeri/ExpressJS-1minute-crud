import { Schema, model } from 'mongoose';
import { IUser } from '../entities/user';

export const userSchema = new Schema<IUser>(
    {
        name: { type: String },
        address: { type: String },
    },
    { timestamps: true }
);

userSchema.index({ name: 'text', address: 'text' });

export default model<IUser>('User', userSchema);
