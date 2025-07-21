import { Router } from "express";
import { createUser, login } from "../controller/user.js";

const userRouter = new Router();

userRouter.post("/signup", createUser);
userRouter.post("/login", login);

export default userRouter;
