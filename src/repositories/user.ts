import { Repository } from "./generic";
import {IUser, IUserRepository} from "../entities/user";


class UserRepository extends Repository<IUser> implements IUserRepository {

}

export default UserRepository;
