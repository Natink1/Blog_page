import { Router } from "express";
import { createUser, login } from "../controller/user.js";
import { adminmiddleware } from "../middlewares/adminmiddleware.js";
import { authmiddleware } from "../middlewares/authmiddleware.js";
const userRouter = new Router();

userRouter.post("/createuser", [authmiddleware], [adminmiddleware], createUser);
userRouter.post("/login", login);

export default userRouter;
