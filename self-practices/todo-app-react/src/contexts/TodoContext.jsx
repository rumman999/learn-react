import { createContext, useContext, useState } from "react";

const TodoContext = createContext()

const TodoProvider = ({children}) =>{
    const [todoList, setTodoList] = useState([])
    const addTodo = (todoMessage) => {

        setTodoList( (prev) => ([...prev, {id: Date.now(), todo: todoMessage, completed: false}]))

    }
    const updateTodo = (id, todo) => {
        setTodoList((prev) => {
            return (
                prev.map((prevTodo) => {
                if(id === prevTodo.id){
                    return ({...prevTodo, todo})
                }
                else{
                    return (prevTodo)
                }
            })
            )
        })
    }
    const deleteTodo = (id) => {
        setTodoList((prev) => {
            return (
                prev.filter((prevTodo) => prevTodo.id !== id)
            )
        })
    }
    const toggleComplete = (id) => {
        setTodoList((prev) => {
            return (
                prev.map((prevTodo) =>{
                if(prevTodo.id === id){
                    return {...prevTodo, completed: !prevTodo.completed}
                } else{
                    return prevTodo
                }
            })
            )
        })
    }

    return (
        <TodoContext.Provider value={{todoList, addTodo, updateTodo, deleteTodo, toggleComplete}}>
            {children}
        </TodoContext.Provider>
    );
}


export const useTodo = () => {
    return useContext(TodoContext)
}

export default TodoProvider


// import { useContext, useState, createContext } from "react";

// const TodoContext = new createContext() // 1) create context

// const TodoProvider = ({children}) => { // 2) Provider

//     // if any methods are there put them here


//     return(
//         <TodoContext.Provider>
//             {children}
//         </TodoContext.Provider>
//     )
// }

// export const useTodo = () => {  // 3) useContext 
//     return (useContext(TodoContext))
// }

// export default TodoProvider // 4) export Provider as default

// import { createContext, useContext, useState } from "react";

// const YourContext = createContext();

// const YourProvider = ({ children }) => {
//   const [state, setState] = useState(initialState);

//   // functions to update state
//   const someAction = (payload) => {
//     setState(prev => {
//       // immutable update logic
//       return updatedState;
//     });
//   };

//   return (
//     <YourContext.Provider value={{ state, someAction }}>
//       {children}
//     </YourContext.Provider>
//   );
// };

// export const useYourContext = () => useContext(YourContext);
// export default YourProvider;
