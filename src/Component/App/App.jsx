import {useState} from 'react'
import AddTask from '../AddTask/AddTask'
import Header from '../Header/Header'
import Task from '../Task/Task'
import './App.css'
const App = () => {

    const [showAddTask,setshowAddTask]=useState(false)

    const [task,setTask] =useState([
        {
            "id":1,
            "text":"Dctors appointment",
            "day":"feb 5th",
            "reminder":true
        },
        {
            "id":2,
            "text":"meeting at school",
            "day":"sep 5th",
            "reminder":true
        },
        {
            "id":3,
            "text":"Food Delivary",
            "day":"oct 5th",
            "reminder":false
        }])

  //===================>Add Task<======================= 
const addTask = (tasks) =>{
   
    const id =Math.floor(Math.random()*1000)+1;
    const newTask ={id,...tasks}
    // console.log(newTask);
    console.log([...task,newTask]);
    setTask([...task,newTask])
}
//===================>End Of Add Task<=======================


//===================>Delete Task<=======================

        const deleteTask = (id) =>{
            setTask(task.filter((task)=> task.id !== id ))
            
        }
//==========================>End Of Delete Task<================


          
//===================>remindering The Task<=======================
        const doubleClickreminder = (id)=>{
           setTask(task.map((task)=>task.id === id ? {...task, reminder:!task.reminder } : task))
       
        }
          
//===================>End Of remindering The Task<=======================
    return (
        <div className="container">
           <Header showAdd={showAddTask} onAdd={()=>setshowAddTask(!showAddTask)}/>
         {showAddTask &&  <AddTask addTask={addTask}/>}
        { task.length ?  <Task deleteTask={deleteTask} task={task}  onTogleReminder={doubleClickreminder} /> : <p style = {{color:"red"}}>Empty Task</p>}
          
        </div>
    )
}

export default App
