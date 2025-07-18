const Post = require("../models/Post");
const Category = require("../models/Category");

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().populate("category");
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate("category");
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { title, content, category, image, author } = req.body;
    const post = new Post({ title, content, category, image, author });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json({ message: "Post deleted" });
  } catch (err) {
    next(err);
  }
};
