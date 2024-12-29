import { useContext, useState } from "react";
import { TaskContext } from "./context/TaskContext.js";
import {
  Box,
  Button,
  Input,
  List,
  ListItem,
  Checkbox,
  Text,
  Spinner,
} from "@chakra-ui/react";

const App = () => {
  const { tasks, loading, createTask, toggleTask, deleteTask } =
    useContext(TaskContext);
};

export default App;
