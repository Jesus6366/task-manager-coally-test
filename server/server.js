import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import { swaggerDocs } from "./docs/swagger.js";
import errorHandler from "./middlewares/errorMiddlaware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/api/tasks", taskRoutes);
app.use(errorHandler);

//Swagger documentation
swaggerDocs(app, PORT);

//MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

connectDB();

// Port Binding
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
