import './EachTask.css'
const EachTask = ({task,deleteTask,onTogleRemainder}) => {
    
//  let remainderStatus =task.remainder;
 
//  let remainderClass;

//  if(remainderStatus){
//     remainderClass="task-reminder"
// }

// else{
//     remainderClass="task"

// }

  
    return (
        
        <div className={`task ${task.reminder ?'reminder':'' }`} onDoubleClick={()=>onTogleRemainder(task.id)}>
            <h3>{task.text} <button onClick={()=>deleteTask(task.id)} className="btn2">X</button></h3>
            <p>{task.day}</p>
            
        </div>
    )
}

export default EachTask
