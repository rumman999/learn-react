import React from 'react'
import TodoItem from "./TodoItem"
import { useTodo } from "../contexts/TodoContext";

function TodoList() {
  const { todoList } = useTodo();
  return (
    
    <>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo}></TodoItem>
      ))}
    </>
  )
}

export default TodoList