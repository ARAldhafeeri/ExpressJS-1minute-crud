import {RouterCreator} from "../utils/RouterCreator";
import {userController} from "../controllers";

const UserRouter = RouterCreator(userController);

export default UserRouter;