import React from "react";

function TaskList({ tasks, message }) {
  return (
    <div className="card p-4 shadow-sm">
      <h5>Task List</h5>
      <ul className="list-group mb-3">
        {tasks.map((t, index) => (
          <li key={index} className="list-group-item">
            {t}
          </li>
        ))}
      </ul>
      <p className="text-success fw-bold">{message}</p>
    </div>
  );
}

export default TaskList;
