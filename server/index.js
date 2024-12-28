import express from "express";
import authRoutes from "./routes/auth.js";

const app = express();
const PORT = 8000;

// middlewares
app.use("/api/user", authRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
