import React from "react";

import { Header } from "./components/Header/Header";
import { ToDoPanel } from "./components/ToDoPanel/ToDoPanel";
import { TodoList } from "./components/TodoList/TodoList";

import styles from "./App.module.css";

const DEFAILT_TODO_LIST = [
    { id: 1, name: "task 1", description: "description 1", checked: false },
    { id: 2, name: "task 2", description: "description 2", checked: false },
    {
        id: 3,
        name: "task 3",
        description:
            "lorem description lorem description lorem description lorem description lorem description lorem description lorem description",
        checked: true,
    },
];

function App() {
    const [todos, setTodos] = React.useState(DEFAILT_TODO_LIST);

    const addTodo = ({ name, description }: Omit<Todo, "checked" | "id">) => {
        setTodos([
            ...todos,
            {
                id: todos[todos.length - 1].id + 1,
                description,
                name,
                checked: false,
            },
        ]);
    };

    return (
        <div className={styles.app_container}>
            <div className={styles.container}>
                <Header todoCount={todos.length} />
                <ToDoPanel addTodo={addTodo} />
                <TodoList todos={todos} />
            </div>
        </div>
    );
}

export default App;
