import React, { useState } from 'react'
import {useTodo} from "../contexts/TodoContext"

function AddTodoForm() {
  const [todoMsg, setTodoMsg] = useState("")
  const {addTodo} = useTodo()

  const msgChange = (e) => {
    setTodoMsg(e.target.value);
  };

  const handleAddTodo = () => {
    if(todoMsg!==""){
      addTodo(todoMsg.trim())
      setTodoMsg("")
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      handleAddTodo();
    }
  }

  return (
    <div>
      <input type="text" value={todoMsg} onKeyDown={handleKeyDown} onChange={msgChange}/>
      <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}

export default AddTodoForm