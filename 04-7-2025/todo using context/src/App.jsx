import React from "react";
import Taskinput from "./component/Taskinput.jsx";
import TaskList from "./component/TaskList.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";

export default function App() {
  return (
    <TaskProvider>
      <div>
        <h1>To Do List</h1>
        <Taskinput />
        <TaskList />
      </div>
    </TaskProvider>
  );
}













