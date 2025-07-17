import post from "../models/post.js";

export const createPost = async (req, res) => {
  try {
    const newPost = new post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
