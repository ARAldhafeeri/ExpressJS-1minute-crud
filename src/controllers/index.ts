import UserController from "./user";
import {userService} from "../services";

export const userController = new UserController(userService);