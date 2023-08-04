import { TodoItem } from "./";


export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {

    return (
        <div className="col-12 col-md-5 m-5 div-list">
            <ul className="list-group d-flex">
                {
                    todos.map(todo => (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            onDeleteTodo={onDeleteTodo}
                            onToggleTodo={onToggleTodo}
                        />
                    ))
                }
            </ul>
        </div>
    )
}
