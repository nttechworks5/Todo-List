import React from 'react'
import { useState } from 'react'
const App = () => {
  const[task,settask]=useState("");
   const[tasks,settasks]=useState([]);
   const[count,setcount]=useState(0);
   const Addtask=()=>{
    if(task.trim()!==""){
    settasks([...tasks,task]);
    settask("");
    setcount(count+1)
   }
  }
  const removetask=(id)=>{
    settasks(tasks.filter((item,index)=>index!==id))
  setcount(count-1)
  }
  const removealltask=()=>{
    settasks([]);
      setcount(0);
  }
  return (
    <div>
      <h2>Todo List</h2>
      <h3>count:{count}</h3>
      <input type="text" value={task} onChange={(e)=>settask(e.target.value)}  
      placeholder='Enter Your Task '/>
      <button onClick={Addtask}>Add Task</button>
      <button onClick={removealltask}>remove all task</button>
      <ul>
        {
          tasks.map((item,index)=>(
            <li key={index}>{item} <button onClick={()=>removetask(index)} >remove</button></li>
          ))
        }
      </ul>
    </div>
  )
}

export default App