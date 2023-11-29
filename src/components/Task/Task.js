import './Task.css'
import React,{useState} from 'react';

function Task(prop){
    const [pClass,setpClass]=useState('notCrossed')

    const handleCheckboxChange= (event)=>{
        const shouldCross = event.target.checked;
       
        setpClass(shouldCross ? 'crossed' : 'notCrossed');
        
    }
    
    
    return(
        <div className='task-div'>
            {/* <p className={pClass}>{prop.name}</p> */}
            {/* <div>
                <date variable={prop.date}/>
            </div> */}
            {/* <input className='check-box' type="checkbox" onChange={handleCheckboxChange} /> */}
            <label className={pClass}>{prop.name}
            <input className='check-box' type="checkbox" onChange={handleCheckboxChange}/>
            <span className="checkmark"></span>
            </label>
        </div>
    )
}
export default Task;
