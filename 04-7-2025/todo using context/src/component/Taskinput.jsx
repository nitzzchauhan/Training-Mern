import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function Taskinput() {
  const [task, setTask] = useState("");
  const { addTask } = useContext(TaskContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (task.trim()) {
      // task will sent to context / global state
      addTask(task);

      setTask("");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={task}
          type="text"
          name=""
          id=""
          placeholder="Enter a Task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}
