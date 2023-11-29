import './Task.css'
function Task(prop){
    const handleCheckboxChange= (event)=>{
        const shouldCross = event.target.checked;
        const pClass = shouldHighlight ? 'crossed' : 'notCrossed';
    }
    
    
    return(
        <div>
            <p className={pClass}>{prop.name}</p>
            <div>
                <date variable={prop.date}/>
            </div>
            <input type="checkbox" onchange={handleCheckboxChange} />
        </div>
    )
}
// check whe to use useStet and dont forget import react ,{useStaet}