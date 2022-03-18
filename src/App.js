import Container from "./components/container";
import TodoListContextProvider from "./components/contexts/todoListContext";

function App() {
    return (
        <TodoListContextProvider>
            <Container />
        </TodoListContextProvider>
    );
}

export default App;
