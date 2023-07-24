import { createContext, useEffect, useState } from "react";
import { tasks  } from "../Components/data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider({children}) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storageTasks  = JSON.parse(localStorage.getItem("tasks") ?? "[]")
    setTasks(storageTasks)
    
  },[])

  function createTasks(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
    localStorage.setItem("tasks",JSON.stringify([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]))
    
  }
  
  function updateStorage(tasks){
    setTasks(tasks)
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }


  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id != taskId));
    localStorage.setItem("tasks",JSON.stringify(tasks.filter((task) => task.id != taskId)))
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTasks,
        updateStorage
      }}
    >
        {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
