import express from "express";

const router = express.Router();
import {
  getAllTasks,
  getATask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

router.get("/", getAllTasks);

router.get("/:id", getATask);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;
