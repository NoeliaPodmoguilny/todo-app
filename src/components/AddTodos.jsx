import { useForm } from "../hooks/useForm";

export const AddTodos = ({onNewTodo}) => {

    const { description, onInputChange, onResetForm} = useForm({
        description: ''
    })

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }
        onNewTodo(newTodo);
        onResetForm();
    };

    return (
        <div className="col-12 col-md-5 margin-add">
            <h4 className="text-light">
                Agregar nueva tarea
            </h4>
            <form >
                <div className="d-flex flex-column flex-md-row align-items-md-center">
                    <input 
                        type="text"
                        placeholder="Escribir aquí"
                        className="form-control mx-1"
                        name="description"
                        value={description}
                        onChange={onInputChange}
                    />
                    <button 
                        type="submit"
                        className="btn btn-outline-warning mt-1 mt-md-0 mr-md-1"
                        onClick={onFormSubmit}
                    > Agregar
                    </button>
                </div>
            </form>
        </div>
    )
}
