import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App(){
  const [tasks, setTasks]=useState([]);
  const [newTask, setNewTask]=useState('');

  useEffect(()=>{
    fetchTasks();
  }, []);

  const fetchTasks = async()=>{
    const res =await axios.get('http://localhost:5000/tasks');
    setTasks(res.data)
  };

  const addTask = async()=>{
    const res = await axios.post('http://localhost:5000/tasks', {title: newTask});
    setTasks([...tasks, res.data]);
    setNewTask('')
  }

  const deleteTask = async(id)=>{
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    setTasks(tasks.filter((task)=>task._id!==id));
  }

  return(
    <div>
      <h1>Task Manager</h1>
      <input type='text' placeholder='Enter Task'
      value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>  

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task)=>(
          <li key={task._id}>
            {task.title}<button onClick={()=>deleteTask(task._id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default App;