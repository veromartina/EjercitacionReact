import { useState } from "react";

export const TaskList = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChangeTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if(task.trim()){  {/* valida si esta vacio o no. si esta vacio el input no agrega nada */}
    setTaskList([...taskList, task]);  //uso opereitor "..." para que me agrege una tarea a mi array y que no la borre. cada vez que hago click que me haga una copia de lo que tengo en mi array y que me agrgue la tarea nueva. 
    setTask("");  //me limpia el imput
}
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <form onSubmit={addTask}>   {/*con onSubmit puedo usar enter en lugar del click en el boton*/}
        <label htmlFor="task">Tarea</label>
        <input
          type="text"
          id="task"
          name="task"
          placeholder="Ingrese una tarea..."
          value={task}
          autoComplete="off"
          onChange={handleChangeTask}
        />
        <button type="submit">Agregar a la lista</button>
        <button onClick={() => setTaskList([])}>Borrar toda la lista</button>
      </form>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};