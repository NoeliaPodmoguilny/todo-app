

export const Item = ({todo, onToggleTodo}) => {
    return (
        <div className="form-check form-check-inline mb-2 mb-sm-0 ">
            <input 
                type="checkbox" 
                className="form-check-input"
                id={`checkbox-${todo.id}`} 
                onClick={() => onToggleTodo(todo.id)}
            />
            <label 
                className={`form-check-label ml-sm-2 fw-semibold text-break
                    ${(todo.done) 
                        ? 'text-decoration-line-through' 
                        : '' }`
                }
                htmlFor={`checkbox-${todo.id}`} 
            > {todo.description} 
            </label>
        </div>
    )
}
