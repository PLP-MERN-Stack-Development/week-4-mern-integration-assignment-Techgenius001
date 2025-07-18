// Post.js - Mongoose model for blog posts

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  author: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  image: { type: String },
  author: { type: String, required: true },
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now },
});

// Create slug from title before saving
postSchema.pre("save", function (next) {
  if (!this.isModified("title")) {
    return next();
  }

  this.slug = this.title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");

  next();
});

// Virtual for post URL
postSchema.virtual("url").get(function () {
  return `/posts/${this.slug}`;
});

// Method to add a comment
postSchema.methods.addComment = function (userId, content) {
  this.comments.push({ user: userId, content });
  return this.save();
};

// Method to increment view count
postSchema.methods.incrementViewCount = function () {
  this.viewCount += 1;
  return this.save();
};

module.exports = mongoose.model("Post", postSchema);
