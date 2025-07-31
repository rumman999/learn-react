import { useState } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Learn about Redux-Toolkit</h1>
        <AddTodo></AddTodo>
        <Todos></Todos>
      </div>
    </>
  )
}
export default App
