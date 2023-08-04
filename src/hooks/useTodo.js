import { useEffect, useReducer } from "react"
import { todoReducer } from "../reducer/todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {

        const action = {
            type: 'Add ToDo', 
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'Delete ToDo',
            payload: id
        })
    }
    
    const handleToggleTodo = (id) => {
        dispatch({
            type: 'Toggle ToDo',
            payload: id
        })
    }

    return{
        todos, 
        handleDeleteTodo, 
        handleToggleTodo, 
        handleNewTodo,
        pendingTodosCount: 
            todos.filter(todo => !todo.done).length,
        todosCount: 
            todos.length,
    }
}