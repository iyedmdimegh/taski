import "./FilterTasks.css";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './FilterTasks.css'

  


function FilterTasks (prop){
    
    const [selectedDate, setSelectedDate] = useState(null);
    const [name, setName] = useState("");
    const popupContainer = document.getElementById('popupContainer');
    const handleAddTask = () => {
        if(name==="" || selectedDate===null){
            popupContainer.classList.add('show-popup');
            setTimeout(()=>{popupContainer.classList.remove('show-popup');}, 6000);
        }
        
        else{
            prop.task({
              id: 22,
              name: name,
              date: selectedDate,
            });
            setName("");
            setSelectedDate(null);
        }
      };
      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleAddTask();
        }
      };
    return(
        <div className="t-input-container">
            <p className="t-input-parag">Add tasks to your tasklist</p>
            <form className="f-form">
                <label for="t-name" class="t-label" >Task</label>
                <input type="text" className="t-input"  
                    value={name} 
                    onChange={(event)=>{setName(event.target.value)}}  
                    id="t-name" 
                    placeholder="write what you are planning to do"/>
                <label for="t-date" className="t-label">Date</label>
                <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Select Date" 
                className="t-input"
                onKeyDown={handleKeyDown} 
                    />
                
            </form>
            <button className="t-add-btn" onClick={handleAddTask}>Add</button>
            <div id="popupContainer" className="popup">
                <div className="popup-content">
                    <p>Invalid Entries</p>
                </div>
            </div>
        </div>
    )
}
export default FilterTasks;
