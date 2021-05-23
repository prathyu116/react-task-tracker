

import EachTask from "../EachTask/EachTask"
import "./Task.css"
 
const Task = ({task,deleteTask ,onTogleReminder}) => {
   
    return (
      
        <>
        {task.map((task)=>
            
        <EachTask onTogleRemainder={onTogleReminder} deleteTask={deleteTask} key={task.id} task={task}/>
        )}
            
        </>
      
    )
}

export default Task
