import React from "react";
import { Button } from "../Button/Button";

import styles from "./ToDoPanel.module.css";

const DEFAULT_TODO_ITEM = {
    name: "",
    description: "",
};

interface ToDoPanelProps {
    addTodo: ({ name, description }: Omit<Todo, "checked" | "id">) => void;
}

export const ToDoPanel: React.FC<ToDoPanelProps> = ({ addTodo }) => {
    const [todo, setTodo] = React.useState(DEFAULT_TODO_ITEM);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    };

    const onClickAdd = () => {
        addTodo({
            name: todo.name,
            description: todo.description,
        });
        setTodo(DEFAULT_TODO_ITEM);
    };

    return (
        <div className={styles.todo_panel_container}>
            <div className={styles.fields_container}>
                <div className={styles.field_container}>
                    <label htmlFor="name">
                        <div>Name</div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={todo.name}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div className={styles.field_container}>
                    <label htmlFor="description">
                        <div>Description</div>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={todo.description}
                            onChange={onChange}
                        />
                    </label>
                </div>
            </div>
            <div className={styles.button_container}>
                <Button color="blue" onClick={onClickAdd}>
                    Add
                </Button>
            </div>
        </div>
    );
};
