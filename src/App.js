import './App.css';
import Intro from './components/Intro/Intro'
import Sign from './components/Sign/Sign'
import Tasklist from './components/Tasklist/Tasklist';
import FilterTasks from './components/FilterTasks/FilterTasks'
import React,{useState} from 'react';
const DUMMY_TASK_LIST=[
  {
    id:"id1",
    name:"Do dishes",
    date: new Date(2023, 11,18),
  },
  {
    id:"id2",
    name:"Go to school",
    date: new Date(2023, 9,4),
  },
  {
    id:"id3",
    name:"Study",
    date: new Date(2023, 10,28),
  }
]



function App() {
  const [taskList,setTaskList]=useState(DUMMY_TASK_LIST);
  const addTask=(newTask)=>{
    setTaskList((prevtaskList)=>{return([...prevtaskList,newTask])})
  }
  const deleteTaskById=(taskId)=>{
    setTaskList((prevTaskList) => prevTaskList.filter((task) => task.id !== taskId));
  }
  return (
    <div className="App">
      <Intro/>
      <Sign className="sign-pos"/>
      <FilterTasks task={addTask}/>
      
      <Tasklist taskList={taskList} deleteTaskHandler={deleteTaskById}/>
      </div>
  );
}

export default App;
