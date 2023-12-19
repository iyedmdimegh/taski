import './Task.css'
import React,{useState} from 'react';

function Task(prop){
    const [pClass,setpClass]=useState('notCrossed')

    const handleCheckboxChange= (event)=>{
        const shouldCross = event.target.checked;
       
        setpClass(shouldCross ? 'crossed' : 'notCrossed');
        
    }
    console.log(prop.date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatter = new Intl.DateTimeFormat('en-UK', options);
    const formattedDate = formatter.format(prop.date);
    return(
        <div className='task-div'>
            <div className='tl-date-container'>
                <p >{formattedDate}</p>
                
            </div>
            <label className={pClass}>{prop.name}
            <input className='check-box' type="checkbox" onChange={handleCheckboxChange}/>
            <span className="checkmark"></span>
            </label>
        </div>
    )
}
export default Task;
