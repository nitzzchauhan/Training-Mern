import { createContext, useContext,useState } from "react";

// create a context
export const TaskContext = createContext();


// create a provider component
export const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };
  const removeTask = (index) => {
    console.log(index)
    setTasks(tasks.filter((_,i)=> i !== index))
    
    
  };
  return (
    <TaskContext.Provider
      value={{tasks, addTask, removeTask}}
    >
        {children}
    </TaskContext.Provider>
  );
};
























