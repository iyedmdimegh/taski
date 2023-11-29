import './App.css';
import Intro from './components/Intro/Intro'
import Sign from './components/Sign/Sign'

const tasksList=[
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
  return (
    <div className="App">
      <Intro/>
      <Sign className="sign-pos"/>
    </div>
  );
}

export default App;
