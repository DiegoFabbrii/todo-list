import { useContext } from "react";
import { TodoListContext } from "./contexts/todoListContext";
import { BiCheck, BiTrash } from "react-icons/bi";
import style from "../styles/TodoList.module.css";

function TodoList() {
    const { todoListFiltered, removeHandler, completedHandler } =
        useContext(TodoListContext);

    return (
        <ul className={style.list}>
            {todoListFiltered &&
                todoListFiltered.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className={`${style.listItem} ${
                                item.completedTodo ? style.completed : ""
                            }`}
                        >
                            <div>
                                <p>{item.text}</p>
                            </div>

                            <div className={style.icons}>
                                <BiCheck
                                    onClick={() => completedHandler(item.id)}
                                />
                                <BiTrash
                                    onClick={() => removeHandler(item.id)}
                                />
                            </div>
                        </li>
                    );
                })}
        </ul>
    );
}

export default TodoList;
