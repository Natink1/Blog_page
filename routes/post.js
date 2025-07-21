import { Router } from "express";
import {
  createPost,
  deletePost,
  listPosts,
  listSinglePost,
  updatePost,
} from "../controller/post.js";
import { authmiddleware } from "../middlewares/authmiddleware.js";
const postRouter = Router();

// postRouter.use("/");
// postRouter.use("post/:id");

postRouter.post("/admin/createpost", [authmiddleware], createPost);
postRouter.get("/posts", listPosts);
postRouter.get("/post/:id", listSinglePost);
postRouter.patch("/admin/post/edit/:id", [authmiddleware], updatePost);
postRouter.delete("/admin/delete/:id", [authmiddleware], deletePost);

export default postRouter;
