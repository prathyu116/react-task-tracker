import { useState } from 'react'
import './AddTask.css'

const AddTask = ({addTask}) => {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)

const onSubmit =(e)=>{
    e.preventDefault()
    if(!text){
        alert('please add a task')
        return
    }
    
addTask({text,day,reminder})
setText('')
setDay('')
setReminder(false)


}

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="task">Task</label>       
                <input value={text} onChange={(e)=>setText(e.target.value)} type="text"  placeholder="Add-Task"/>
            </div>
            <div className="form-control">
                <label htmlFor="Day">Day and Time</label>
                <input value={day} onChange={(e)=>setDay(e.target.value)} type="text"  placeholder="Add-Day and Time"/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="task">Set-Reminder</label>
                <input value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} type="checkbox"  placeholder="Add-Reminder"/>
            </div>
            <input className="btn btn-block" type="submit" value="Save-Task"/>
            
        </form>
    )
}

export default AddTask
