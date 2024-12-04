import {Service} from "./generic";
import {IUser, IUserService} from "../entities/user";


class UserService extends Service<IUser> implements IUserService {

}

export default UserService;