import { IRepository } from '../entities/generic';
import {Model, Document, UpdateQuery} from 'mongoose';
import { FilterQuery, ProjectionType, Types } from 'mongoose';

export class Repository<T> implements IRepository<any> {
    constructor(private model: Model<T>) {}

    async find(
        filter: FilterQuery<T>,
        projection: ProjectionType<T>,
    ): Promise<T[]> {
        return this.model.find(filter, projection)
            .sort({ updatedAt: -1 })
    }

    async create(record: T): Promise<any> {
        const newRecord = new this.model(record);
        return newRecord.save();
    }

    async update(
        filter: FilterQuery<T>,
        record: UpdateQuery<T>,
    ): Promise<any> {
        return this.model.findByIdAndUpdate(filter, record, { new: true }).exec();
    }

    async delete(filter: FilterQuery<T>): Promise<any> {
        return this.model.findOneAndDelete(filter).exec();
    }
}