import React, { useState } from "react";
import TaskForm from "./Component/TaskForm";
import TaskList from "./Component/Tasklist";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, taskName]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} clearTasks={clearTasks} />
    </div>
  );
}

export default App;
