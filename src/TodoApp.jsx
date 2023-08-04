import { TodoList, AddTodos } from "./components";
import { useTodo } from "./hooks/useTodo";

export const TodoApp = () => {

    const {
        todos, 
        todosCount, 
        pendingTodosCount, 
        handleDeleteTodo, 
        handleToggleTodo, 
        handleNewTodo
    } = useTodo();

    return (
        <>
            <h1 className="text-light text-center"> Tareas: {todosCount}</h1>
            <h2 
                className={`text-center
                    ${(pendingTodosCount !== 0) 
                        ? 'text-warning' 
                        : 'text-warning-emphasis'
                    }`}
                > Pendientes: {pendingTodosCount}
            </h2>
            
            <div className="d-flex flex-column align-items-center">
                    <AddTodos 
                        onNewTodo={handleNewTodo}
                    />
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
            </div>
        </>
    )
}
