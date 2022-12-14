import React from "react";
import { Button } from "../../Button/Button";

import styles from "./TodoItem.module.css";

interface TodoItemProps {
    todo: Todo;
    checkTodo: (id: Todo["id"]) => void;
    removeTodo: (id: Todo["id"]) => void;
    selectTodoIdForEdit: (id: Todo["id"]) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    checkTodo,
    removeTodo,
    selectTodoIdForEdit,
}) => {
    return (
        <div className={styles.todo_item_container}>
            <div
                aria-hidden
                style={{
                    opacity: todo.checked ? 0.5 : 1,
                    textDecoration: todo.checked ? "line-through" : "none",
                }}
                className={styles.todo_item_title}
                onClick={() => checkTodo(todo.id)}
            >
                {todo.name}
            </div>
            <div aria-hidden className={styles.todo_item_description}>
                {todo.description}
            </div>
            <div className={styles.todo_item_btn_container}>
                <Button
                    color="orange"
                    onClick={() => selectTodoIdForEdit(todo.id)}
                >
                    EDIT
                </Button>
                <Button color="red" onClick={() => removeTodo(todo.id)}>
                    REMOVE
                </Button>
            </div>
        </div>
    );
};
