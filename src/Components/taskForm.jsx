import { useState, useContext} from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTasks} = useContext(TaskContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title !== "" && description !== "") {
      createTasks({
        title,
        description,
      });
      setTitle("");
      setDescription("");
    } else {
      alert("Necesitas rellenar los campos");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-900 p-10 mb-4 " onSubmit={handleSubmit}>
        <h1 className="font-bold text-white mb-2"> Crea tu Tarea </h1>
        <input 
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        ></input>
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Descripcion de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button
          className="bg-indigo-500 p-3 mx-auto text-white"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
