import express from "express";
import authRoutes from "./routes/auth.js";
import taskRoutes from "./routes/task.js";

const app = express();
const PORT = 8000;

// middlewares
app.use("/api/user", authRoutes);
app.use("/api/tasks", taskRoutes);

//global error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({ error: message });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
