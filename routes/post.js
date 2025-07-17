import { Router } from "express";
import {
  createPost,
  listPosts,
  listSinglePost,
  updatePost,
} from "../controller/post.js";
const postRouter = Router();

// postRouter.use("/");
// postRouter.use("post/:id");

postRouter.post("/createpost", createPost);
postRouter.get("/posts", listPosts);
postRouter.get("/post/:id", listSinglePost);
postRouter.patch("/post/edit/:id", updatePost);

export default postRouter;
