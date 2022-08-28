import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const { addTodo, setOpenModal} = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    
    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo (newTodoValue);
        setOpenModal(false);
    };
    
    return (
        <form onSubmit={onSubmit} className='TodoForm'>

        <label className="TodoForm-title">Añadir 📝</label>
        <textarea className="TodoForm-textarea"
            value={newTodoValue}
            onChange={onChange}
            placeholder="Escribe tu nueva tarea"
        />
        <div className="TodoForm-buttonContainer">
            <button
            onClick={onSubmit} type="submit"
            className="TodoForm-button TodoForm-button--add"
            >
            Añadir
            </button>
            <button
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick= {onCancel}>
             Cancelar
            </button>
        </div>
        </form>
    );
    }

export { TodoForm };