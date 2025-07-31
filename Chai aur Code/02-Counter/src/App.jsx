import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const increaseValue = () => {
    if(count<20) setCount(count+1);
  }

  const decreaseValue = () => {
    if(count>0) setCount(count-1);
  }

  return (
    <>
    <h1>Rumman Karim</h1>
    <h2>Counter Value: {count}</h2>

    <button onClick = {increaseValue}>Increase</button>
    <button onClick = {decreaseValue}>Decrease</button>
    </>
  )
}

export default App
