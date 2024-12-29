import express from "express";
import {
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
} from "../controllers/taskControllers.js";

import { check } from "express-validator";

const router = express.Router();

router.get("/:id", getTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.post(
  "/",
  [check("title", "Title is required").not().isEmpty()],
  createTask
);

export default router;
