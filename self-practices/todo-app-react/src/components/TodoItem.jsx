import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({todo}) {
  const { todoList, updateTodo, deleteTodo, toggleComplete } = useTodo();
  const [editing, setEditing] = useState(false);


  const handleCheckChange = () => {
    toggleComplete(todo.id);
  }

  const handleRemove = () => {
    deleteTodo(todo.id);
  }

  const handleEditClick = ()  => {
      if(editing){
        setEditing(false)
      } else{
        setEditing(true)
      }
  }

  const handleKeyDown = (e) =>{
    if(e.key === "Enter" || e.key === "Escape"){
      setEditing(false)
    }
  }

  const handleChange = ( event ) => {
    updateTodo(todo.id, {todo: event.target.value})
  }

  return (

        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleCheckChange}
          />
          <input value={todo.todo} readOnly={!editing} onChange={ (e) => handleChange(e)} onKeyDown={ (e) => handleKeyDown(e)}></input>
          <button onClick={handleEditClick}>{editing ? "Save" : "Edit"}</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
  );
}

export default TodoItem;
