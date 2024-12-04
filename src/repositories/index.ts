import UserRepository from "./user";
import UserModel from "../models/user"

export const userRepository = new UserRepository(UserModel);