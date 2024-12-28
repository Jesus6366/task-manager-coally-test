import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Task must have an owner"],
    },
    title: {
      type: String,
      required: [true, "Must provide a title"],
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Properly placed as an option
  }
);

const Task = mongoose.model("Task", taskSchema); // Correct model name

export default Task;
