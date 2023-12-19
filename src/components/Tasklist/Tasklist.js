import './Tasklist.css'
import Task from '../Task/Task'
import React from 'react';
function Tasklist(prop){
    return(
        <div className='outer-tasks-container'>
            {
            prop.taskList.length!==0? (prop.taskList.map((task)=>(
                <div className='inner-tasks-container'>
                    <Task name={task.name} date={task.date} />
                    <button className='t-delete-button' onClick={()=>prop.deleteTaskHandler(task.id)}>Delete</button>
                </div>
            ))):(<p className='p-noTaskLeft'>YAYY you have no tasks for now!!</p>)}

        </div>
    )
}
export default Tasklist;