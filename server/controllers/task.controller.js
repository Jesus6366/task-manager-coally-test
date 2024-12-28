export async function getAllTasks(req, res) {
  res.send("get all tasks");
}

export async function getATask(req, res) {
  res.send("get a task");
  console.log(req.params.id);
}

export async function updateTask(req, res) {
  console.log(req.params.id);

  res.send("update task");
}

export async function deleteTask(req, res) {
  console.log(req.params.id);

  res.send("delete task");
}

export async function createTask(req, res) {
  res.send("task created");
}
