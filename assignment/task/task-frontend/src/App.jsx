import { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  // Fetch Tasks
  const fetchTasks = async () => {
    let url = "/";
    if (filter === "completed") url = "/status/true";
    if (filter === "notcompleted") url = "/status/false";

    const res = await API.get(url);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  // Create Task
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;

    await API.post("/", { title });
    setTitle("");
    fetchTasks();
  };

  // Toggle Completed
  const toggleComplete = async (task) => {
    await API.put(`/${task._id}`, {
      completed: !task.completed,
    });
    fetchTasks();
  };

  // Delete Task
  const deleteTask = async (id) => {
    await API.delete(`/${id}`);
    fetchTasks();
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Task App</h1>

      {/* Create Task */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <br />

      {/* Filter Buttons */}
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("notcompleted")}>
          Not Completed
        </button>
      </div>

      <br />

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span
              onClick={() => toggleComplete(task)}
              style={{
                textDecoration: task.completed
                  ? "line-through"
                  : "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {task.title}
            </span>

            <button onClick={() => deleteTask(task._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;