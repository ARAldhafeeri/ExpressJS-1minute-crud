import Controller from "./generic";
import {IUserController, IUserService} from "../entities/user";


class UserController extends Controller<IUserService> implements IUserController {

}

export default UserController;