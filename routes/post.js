import { Router } from "express";
import {
  createPost,
  deletePost,
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
postRouter.delete("/delete/:id", deletePost);

export default postRouter;
