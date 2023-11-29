import './Tasklist.css'
import Task from '../Task/Task'
import React from 'react';
function Tasklist(prop){
    
    return(
        <div className='tasks-container'>
            {prop.taskList.map((task)=>(
                <Task name={task.name} date={task.date} />
                // console.log(task.name);
            ))}
        </div>
    )
}
export default Tasklist;