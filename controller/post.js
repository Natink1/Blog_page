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
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const posts = await post.find().skip(skip).limit(limit);

  if (posts.length === 0) {
    return res.status(404).json({ msg: "No data Found" });
  }

  res.json(posts);
};

export const listSinglePost = async (req, res) => {
  const { id } = req.params;
  const singlePost = await post.findById(id);

  if (!singlePost) {
    return res.json({ msg: "Blog Not Found" });
  }

  res.json(singlePost);
};

export const updatePost = async (req, res) => {
  try {
    const update = req.body;
    const { id } = req.params;

    const updatepost = await post.findByIdAndUpdate(
      { _id: id },
      { $set: update },
      { new: true }
    );

    if (!updatepost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json({
      message: "Post updated successfully",
      updatedFields: Object.keys(updatepost),
      updatepost,
    });
  } catch (error) {
    res.status(400).json({
      message: "Update failed",
      error: error.message,
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatepost = await post.findOneAndDelete({ _id: id });

    if (!updatepost) {
      return res.status(404).json({ message: "No Post found to Delete" });
    }

    res.json({
      message: "Post Deleted successfully",
      updatepost,
    });
  } catch (error) {
    res.status(400).json({
      message: "Delete failed",
      error: error.message,
    });
  }
};
