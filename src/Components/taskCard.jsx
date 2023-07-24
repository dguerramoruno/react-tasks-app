import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask} = useContext(TaskContext);
  const { updateStorage } = useContext(TaskContext);
  const { tasks } = useContext(TaskContext);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const handleUpdate = () => {
    const newTask = {
      id: task.id,
      title,
      description
    }
    const newTasks = tasks.filter((tarea) => tarea.id !== task.id)
    newTasks.push(newTask)
    updateStorage(newTasks)
  }
  return (
    <div
      className="bg-gray-800 text-white rounded-md flex flex-col p-2"
      key={task.id}
    >
      <input
        
        className="border-0 text-xl font-bold capitalize bg-gray-800 m-2  "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <textarea
        className="border-0 text-gray-400 text-sm bg-gray-800 resize m-3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div className="flex justify-center gap-5 m-2">
        <button onClick={() => {handleUpdate()}}
          className="bg-blue-500 p-1 px-2 rounded-md mt-4 hover:blue-400"
        >
          Guardar Tarea
        </button>
        <button
          className="bg-red-500 px-2 p-1 rounded-md mt-4 hover:bg-red-400"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Eliminar Tarea
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
