const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const { body } = require("express-validator");
const validate = require("../middleware/validate.middleware");

const {
  createTask,
  getTasks,
  deleteTask
} = require("../controllers/task.controller");

// router.post("/", auth, createTask);
router.post(
  "/",
  auth,
  body("title").notEmpty().withMessage("Title is required"),
  validate,
  createTask
);
router.get("/", auth, getTasks);
router.delete("/:id", auth, deleteTask);

module.exports = router;
