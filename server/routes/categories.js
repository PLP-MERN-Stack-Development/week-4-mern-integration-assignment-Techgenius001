const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories");
const { body } = require("express-validator");
const validate = require("../middleware/validate");

// GET all categories
router.get("/", categoriesController.getAllCategories);
// POST create category
router.post(
  "/",
  [body("name").notEmpty().withMessage("Name is required"), validate],
  categoriesController.createCategory
);

module.exports = router;
