import React,{useContext} from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskItem({task,index}) {
    console.log(task,index)
    const {removeTask} = useContext(TaskContext)
  return (
    <>
      <li>
        <span>{task.text}</span>
        <button onClick={()=>{removeTask(index)}}>Button</button>
      </li>
    </>
  );
}
