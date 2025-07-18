const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const { body } = require("express-validator");
const validate = require("../middleware/validate");

// POST /api/auth/register
router.post(
  "/register",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    validate,
  ],
  authController.register
);

// POST /api/auth/login
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
    validate,
  ],
  authController.login
);

module.exports = router;
