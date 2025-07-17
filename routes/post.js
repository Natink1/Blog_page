import { Router } from "express";
import { createPost, listPosts, listSinglePost } from "../controller/post.js";
const postRouter = Router();

// postRouter.use("/");
// postRouter.use("post/:id");

postRouter.post("/createpost", createPost);
postRouter.get("/posts", listPosts);
postRouter.get("/post/:id", listSinglePost);

export default postRouter;
