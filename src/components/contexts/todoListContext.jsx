import { createContext, useState, useEffect } from "react";

export const TodoListContext = createContext();

const newId = () => Math.random();

function TodoListContextProvider({ children }) {
    const [newTodo, setNewTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [todoListFiltered, setTodoListFiltered] = useState([]);
    const [value, setValue] = useState("todas");

    const getLocalTodos = () => {
        if (localStorage.getItem("todos" === null)) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            const localTodos = JSON.parse(localStorage.getItem("todos"));
            setTodoList(localTodos);
        }
    };

    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        function filterHandler() {
            if (value === "todas") return setTodoListFiltered(todoList);

            if (value === "completas") {
                setTodoListFiltered(
                    todoList.filter((item) => item.completedTodo)
                );
            } else {
                setTodoListFiltered(
                    todoList.filter((item) => !item.completedTodo)
                );
            }
        }

        filterHandler();

        const saveLocalTodos = () => {
            localStorage.setItem("todos", JSON.stringify([]));
        };

        saveLocalTodos();
    }, [todoList, value]);

    const valueHandler = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList([
            { text: newTodo, completedTodo: false, id: newId() },
            ...todoList,
        ]);
        setNewTodo("");
    };

    const onChangeHandler = (e) => {
        setNewTodo(e.target.value);
    };

    const removeHandler = (id) => {
        const updateItens = todoList.filter((item) => item.id !== id);
        setTodoList(updateItens);
    };

    const completedHandler = (id) => {
        setTodoList(
            todoList.map((item) => {
                if (item.id === id)
                    return {
                        ...item,
                        completedTodo: !item.completedTodo,
                    };

                return item;
            })
        );
    };

    return (
        <TodoListContext.Provider
            value={{
                newTodo,
                todoList,
                todoListFiltered,
                value,
                handleSubmit,
                onChangeHandler,
                removeHandler,
                completedHandler,
                valueHandler,
            }}
        >
            {children}
        </TodoListContext.Provider>
    );
}

export default TodoListContextProvider;
