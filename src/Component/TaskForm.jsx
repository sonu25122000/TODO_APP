import React, { useState } from "react";
const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ padding: "10px" }}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Your Task Name"
      />
      <button style={{ padding: "10px" }} type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
