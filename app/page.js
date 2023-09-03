"use client"
import { useState } from 'react';

const Home = function Home() {

  // Importing the required dependencies and initialize state
  const [task, setTask] = useState('');
  const [tasksArray, setTasksArray] = useState([]);


  // Handling input changes
  const inputChange = (e) => {
    setTask(e.target.value);
  };


  // Handling form submission
  const inputSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasksArray([...tasksArray, task]);
      setTask('');
    };
  };


  // Handling task deletion
  const handleDelete = (index) => {
    setTasksArray(tasksArray.filter((_, i) => i !== index));
  };


  return (
    <>

      <h1> Ayush's To-do List App </h1>

      <form onSubmit={inputSubmit}>
        <input type="text" value={task} onChange={inputChange} placeholder="Enter a task" />
        <button className="addButton" type="submit">Add task</button>
      </form>

      <ul>
        {tasksArray.map((task, index) => (
          <li key={index}>
            {task}
            <div>
              <button className='deleteButton' onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

    </>
  );
};


export default Home;