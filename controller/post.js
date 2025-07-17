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

export const listPosts = async (req, res) => {
  const posts = await post.find({});

  if (posts === 0) {
    return res.status(404).json({ msg: "No data Found" });
  }

  res.json(posts);
};
