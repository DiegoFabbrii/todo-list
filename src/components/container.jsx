import style from "../styles/Container.module.css";
import Title from "./title";
import TodoListForm from "./todoListForm";
import TodoList from "./todoList";

function Container() {
    return (
        <main className={style.container}>
            <Title />
            <TodoListForm />
            <TodoList />
        </main>
    );
}

export default Container;
