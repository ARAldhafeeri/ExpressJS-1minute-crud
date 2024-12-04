import UserService from "./user";
import {userRepository} from "../repositories";

export const userService = new UserService(userRepository);