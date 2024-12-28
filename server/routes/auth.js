import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
  res.send("login route");
});

router.post("/register", (req, res) => {
  res.send("register route");
});

router.post("/logout", (req, res) => {
  res.send("logout route");
});

export default router;
