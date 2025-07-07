import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";
import TaskItem from "./TaskItem.jsx";

export default function TaskList() {
  
  const {tasks} = useContext(TaskContext);
  // console.log(tasks)
  return (
      <>
        <ul>
         {
          tasks.length > 0 ? tasks.map((task,index)=>
            <TaskItem task={task} key={index} index={index}/>
          ):<p>No Task Added Yet</p>
         }
        </ul>
      </>
  )
}






