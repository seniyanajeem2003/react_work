import React, { useState } from "react";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("Add a task to get started!");
  const [bgColor, setBgColor] = useState("white");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setMessage(`Task added: ${task}!`);
    setTask("");
    setBgColor("lightblue");
  };

  return (
    <div
      className="container mt-5"
      style={{
        backgroundColor: bgColor,
        borderRadius: "10px",
        transition: "0.5s",
      }}
    >
      <div className="card p-4 mb-4 shadow">
        <h3 className="mb-3 text-center">Task Planner</h3>
        <form onSubmit={handleAddTask}>
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className="form-control mb-3" placeholder="Enter a task"/>
          <button type="submit" className="btn btn-primary w-100">
            Add Task
          </button>
        </form>
      </div>

      <TaskList tasks={tasks} message={message} />
    </div>
  );
}

export default App;
