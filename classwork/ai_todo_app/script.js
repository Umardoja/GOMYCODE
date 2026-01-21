const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = todo.completed ? "completed" : "";

    const text = document.createElement("span");
    text.textContent = todo.text;
    text.onclick = () => toggleTodo(index);

    const del = document.createElement("button");
    del.textContent = "❌";
    del.onclick = () => deleteTodo(index);

    li.appendChild(text);
    li.appendChild(del);
    list.appendChild(li);
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
  if (input.value.trim() === "") return;
  todos.push({ text: input.value, completed: false });
  input.value = "";
  renderTodos();
}

function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

addBtn.addEventListener("click", addTodo);
renderTodos();
