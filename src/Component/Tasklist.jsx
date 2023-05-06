import React from "react";
import "./tasklist.css";
const TaskList = ({ tasks, deleteTask, clearTasks }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>SN.</th>
            <th>Task Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td style={{ fontSize: "16px", fontWeight: "bold" }}>{task}</td>
                <td>
                  <button
                    style={{
                      borderRadius: "10px",
                      padding: "10px 20px",
                      border: "none",
                      background: "red",
                      color: "white",
                      fontSize: "16px",
                    }}
                    onClick={() => deleteTask(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <button
        style={{
          borderRadius: "10px",
          padding: "10px 20px",
          border: "none",
          background: "green",
          color: "white",
          fontSize: "16px",
        }}
        onClick={clearTasks}
      >
        Clear All
      </button>
    </div>
  );
};

export default TaskList;
