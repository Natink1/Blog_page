import { Router } from "express";
import userRouter from "./user.js";
import { authmiddleware } from "../middlewares/authmiddleware.js";
import postRouter from "./post.js";

const rootRouter = new Router();

rootRouter.use("/auth", userRouter);
rootRouter.use("/", postRouter);

export default rootRouter;
