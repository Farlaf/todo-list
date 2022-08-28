import React from "react";
import { Button } from "../../Button/Button";

import styles from "./TodoItem.module.css";

interface TodoItemProps {
    todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    return (
        <div className={styles.todo_item_container}>
            <div
                aria-hidden
                style={{
                    opacity: todo.checked ? 0.5 : 1,
                    textDecoration: todo.checked ? "line-through" : "none",
                }}
                className={styles.todo_item_title}
            >
                {todo.name}
            </div>
            <div aria-hidden className={styles.todo_item_description}>
                {todo.description}
            </div>
            <div className={styles.todo_item_btn_container}>
                <Button color="orange">EDIT</Button>
                <Button color="red">REMOVE</Button>
            </div>
        </div>
    );
};
