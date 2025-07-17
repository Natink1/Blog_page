import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  Imageurl: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("post", postSchema);
