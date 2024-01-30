import React, { useState } from "react";
import "./App.css";
import TaskItem from "./TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    const { name, value, type, checked } = event.target;

    setFormState((prevFormState) =>({
      ...prevFormState,
      [name]: type ==='checkbox' ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    setTasks((prevTasks) => [...prevTasks, formState]);

    setFormState({
      task: "",
      completed: false,
      taskAssignedTo: "",
    });
  }
  function handleDelete(index){
    setTasks((prevTasks) => [...prevTasks.slice(0, index), ...prevTasks.slice(index+ 1)]);
  }


  function handleToogle(index){
    setTasks((prevTasks) => prevTasks.map((task, i) =>
    i === index ? { ...task, completed: !task.completed }: task)
    )
  }



  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" value={formState.task} onChange={handleChange}/>
          <label>
            Completed:
            <input name="completed" type="checkbox" checked={ formState.completed} onChange={handleChange}/>
          </label>
          <select name="taskAssignedTo" value={formState.taskAssignedTo} onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem key={index} item={item}
        onDelete={()=> handleDelete(index)}
        onToggle={() => handleToogle(index)}
        />
      ))}
    </>
  );
}

export default App;

