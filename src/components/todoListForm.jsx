import style from "../styles/Form.module.css";
import { useContext } from "react";
import { TodoListContext } from "./contexts/todoListContext";
import SelectComponent from "./select";

function TodoListForm() {
    const { newTodo, handleSubmit, onChangeHandler } =
        useContext(TodoListContext);

    return (
        <form
            className={style.form}
            onSubmit={(e) => {
                handleSubmit(e);
            }}
        >
            <input
                type="text"
                id="NewTodo"
                placeholder="Adiconar nova tarefa"
                value={newTodo}
                required
                onChange={onChangeHandler}
            />
            <button>Adicionar</button>
            <SelectComponent />
        </form>
    );
}

export default TodoListForm;
