const API_URL = "http://localhost:5000/api/tasks";
const taskList = document.getElementById("taskList");
const form = document.getElementById("taskForm");


// Create Task
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });

  form.reset();
  getTasks();
});


// Fetch All Tasks
async function getTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  displayTasks(tasks);
}


// Filter Tasks
async function filterTasks(status) {
  const res = await fetch(`${API_URL}/status/${status}`);
  const tasks = await res.json();
  displayTasks(tasks);
}


// Delete Task
async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  getTasks();
}


// Toggle Complete
async function toggleComplete(task) {
  await fetch(`${API_URL}/${task._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: !task.completed }),
  });
  getTasks();
}


// Display Tasks
function displayTasks(tasks) {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
      <strong>${task.title}</strong>
      <p>${task.description || ""}</p>
      <button onclick='toggleComplete(${JSON.stringify(task)})'>
        ${task.completed ? "Undo" : "Complete"}
      </button>
      <button onclick="deleteTask('${task._id}')">Delete</button>
    `;

    taskList.appendChild(li);
  });
}


// Load tasks on start
getTasks();