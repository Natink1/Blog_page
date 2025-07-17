import { Router } from "express";
import { createPost } from '../controller/post.js';
const postRouter = Router();

// postRouter.use("/");
// postRouter.use("post/:id");

postRouter.post("/createpost", createPost);

export default postRouter;
