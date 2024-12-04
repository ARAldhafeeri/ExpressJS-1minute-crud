import {FilterQuery, ProjectionType, Types, UpdateQuery} from 'mongoose';

export interface IBaseEntity {
    _id?: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}


export interface IRepository<T extends IBaseEntity> {
    find(
        filter: FilterQuery<T>,
        projection: ProjectionType<T>,
    ): Promise<T[]>;
    create(record: T): Promise<T>;
    update(
        filter: FilterQuery<T>,
        record: UpdateQuery<T>,
    ): Promise<T>;
    delete(
        filter: FilterQuery<T>,
    ): Promise<T>;
}

export interface IService<T extends IBaseEntity> {
    find(id: string ): Promise<T[]>;
    create(record: T, id: string): Promise<T>;
    update(
        record: T,
        recordID: string
    ): Promise<T>;

    delete(id: string, organization: string): Promise<T>;
}

export interface IController {
    fetch ?: Controller;
    create?: Controller;
    update?: Controller;
    delete?: Controller;
    search?: Controller;
}