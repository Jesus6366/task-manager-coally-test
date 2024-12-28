import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("get all tasks");
});

router.get("/:id", (req, res) => {
  res.send("get a task");
  console.log(req.params.id);
});

router.post("/", (req, res) => {
  res.send("task created");
});

router.put("/:id", (req, res) => {
  console.log(req.params.id);

  res.send("update task");
});

router.delete("/:id", (req, res) => {
  console.log(req.params.id);

  res.send("delete task");
});

export default router;
