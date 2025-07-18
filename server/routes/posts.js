const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const { body } = require("express-validator");
const validate = require("../middleware/validate");

// GET all posts
router.get("/", postsController.getAllPosts);
// GET single post
router.get("/:id", postsController.getPostById);
// POST create post
router.post(
  "/",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("content").notEmpty().withMessage("Content is required"),
    body("category").notEmpty().withMessage("Category is required"),
    body("author").notEmpty().withMessage("Author is required"),
    validate,
  ],
  postsController.createPost
);
// PUT update post
router.put(
  "/:id",
  [
    body("title").optional().notEmpty().withMessage("Title cannot be empty"),
    body("content")
      .optional()
      .notEmpty()
      .withMessage("Content cannot be empty"),
    body("category")
      .optional()
      .notEmpty()
      .withMessage("Category cannot be empty"),
    body("author").optional().notEmpty().withMessage("Author cannot be empty"),
    validate,
  ],
  postsController.updatePost
);
// DELETE post
router.delete("/:id", postsController.deletePost);

module.exports = router;
