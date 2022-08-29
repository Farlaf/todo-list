import React from "react";

import { Header } from "./components/Header/Header";
import { ToDoPanel } from "./components/ToDoPanel/ToDoPanel";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoProvider } from "./utils/contextes/TodoProvider";

import styles from "./App.module.css";

function App() {
    return (
        <TodoProvider>
            <div className={styles.app_container}>
                <div className={styles.container}>
                    <Header />
                    <ToDoPanel mode="add" />
                    <TodoList />
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
