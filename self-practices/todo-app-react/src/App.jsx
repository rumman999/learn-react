import { useState } from 'react'
import TodoProvider from "./contexts/TodoContext"
import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList"

function App() {
  const [count, setCount] = useState(0)

  return (
    <TodoProvider>
      <AddTodoForm></AddTodoForm>
      <TodoList></TodoList>
    </TodoProvider>
  )
}

export default App
