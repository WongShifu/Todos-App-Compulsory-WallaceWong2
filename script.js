const tasks = [];

function addTask() {

  const task = prompt("Enter a new task:");
  if (task) {
    tasks.push(task);
    alert("Task added!");
  } else {
    alert("Please add a task!");

  }

}

function viewTasks() {
  let taskList = "Tasks:";
  for (const task of tasks) {
    taskList += `- ${task}`
  }

  alert(taskList);
}