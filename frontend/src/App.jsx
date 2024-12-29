import { useContext, useState } from "react";
import { TaskContext } from "./context/TaskContext.jsx";
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

  const [newTask, setNewTask] = useState("");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAddTask = () => {
    if (newTask.trim()) {
      createTask(newTask, description);
      setNewTask("");
      setDescription("");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    }

    if (filter === "pending") {
      return !task.completed;
    }
    return true;
  });

  if (loading) {
    return (
      <Box p={5} textAlign="center">
        <Spinner size="xl" />
        <Text mt={3}>Loading Tasks...</Text>
      </Box>
    );
  }

  return (
    <Box
      p={5}
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      justifyContent="center"
    >
      <Input
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        mt={2}
      />
      <Button onClick={handleAddTask} mt={2}>
        Add Task
      </Button>
      <Box mt={5}>
        <Button onClick={() => setFilter("all")}>All</Button>
        <Button onClick={() => setFilter("completed")} ml={2}>
          Completed
        </Button>
        <Button onClick={() => setFilter("pending")} ml={2}>
          Pending
        </Button>
      </Box>
      <List spacing={3} mt={5} width="100%" maxWidth="500px">
        {filteredTasks.map((task) => (
          <ListItem
            key={task._id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            textDecoration={task.completed ? "line-through" : "none"}
          >
            <Box>
              <Checkbox
                isChecked={task.completed}
                onChange={() => toggleTask(task._id, task.completed)}
              >
                {task.title}
              </Checkbox>
              <Text fontSize="sm" color="gray.500">
                {task.description}
              </Text>
            </Box>
            <Button
              size="sm"
              colorScheme="red"
              onClick={() => deleteTask(task._id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default App;
