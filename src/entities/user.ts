import {IBaseEntity, IController, IRepository, IService} from "./generic";

export interface IUser extends IBaseEntity {
    name: string;
    address: string;
}

export interface IUserRepository extends IRepository<IUser> {

}

export interface IUserService extends IService<IUser>{

}

export interface IUserController extends IController {}
