import { useState } from 'react';
import './App.css';

function App() {
  let time = new Date().toLocaleTimeString();
  const[currentTime, setCurrentTime] = useState(time);

const updateTime =() =>{
  let time = new Date().toLocaleTimeString();

  setCurrentTime(time)
}
setInterval(updateTime,1000)
  return (
    <div className="App">
    <h1>{currentTime}</h1>
    </div>
  );
}

export default App;
