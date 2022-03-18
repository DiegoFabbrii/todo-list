import { useContext } from "react";
import { TodoListContext } from "./contexts/todoListContext";
import style from "../styles/Select.module.css";

function SelectComponent() {
    const { value, valueHandler } = useContext(TodoListContext);

    return (
        <div className={style.filter}>
            <select
                className={style.selectFilter}
                value={value}
                onChange={(e) => valueHandler(e)}
            >
                <option value="todas">Todas</option>
                <option value="completas">Completas</option>
                <option value="incompletas">Incompletas</option>
            </select>
        </div>
    );
}

export default SelectComponent;
