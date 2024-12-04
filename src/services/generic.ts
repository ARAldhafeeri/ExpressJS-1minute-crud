import { IService, IBaseEntity, IRepository } from '../entities/generic';
import {Types} from "mongoose";
import ObjectId = Types.ObjectId;

export class Service<T extends IBaseEntity> implements IService<T> {
    constructor(protected repository: IRepository<T>) {
    }

    async find(organization: string ): Promise<any> {
        const filter = { organization: organization };
        return  this.repository.find(filter, {});

    }

    async create(record: T, organization: string): Promise<T> {
        return this.repository.create(record);
    }

    async update(
        record: T,
        recordID: string
    ): Promise<T> {
        const filter = {
            _id: new ObjectId(recordID),
        }
        return this.repository.update(filter, record);
    }

    async delete(id: string): Promise<T> {
        return this.repository.delete({_id: id});
    }

}