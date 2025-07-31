import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todoTitle: " Todo message",
            checked: false
        }
    ],
    addTodo: (todoTitle) => {},
    updateTodo: (id, todoTitle) => {},
    deleteTodo: (id) => {},
    toggleCheck: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}
