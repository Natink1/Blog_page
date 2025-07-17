import { Router } from "express";
import { createPost, listPosts } from "../controller/post.js";
const postRouter = Router();

// postRouter.use("/");
// postRouter.use("post/:id");

postRouter.post("/createpost", createPost);
postRouter.get("/posts", listPosts);

export default postRouter;
