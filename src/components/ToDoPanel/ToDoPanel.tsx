import React from "react";
import { Button } from "../Button/Button";

import styles from "./ToDoPanel.module.css";

const DEFAULT_TODO_ITEM = {
    name: "",
    description: "",
};

interface AddToDoPanelProps {
    mode: "add";
    addTodo: ({ name, description }: Omit<Todo, "checked" | "id">) => void;
}

interface EditToDoPanelProps {
    mode: "edit";
    editTodo: Omit<Todo, "id" | "checked">;
    changeTodo: ({ name, description }: Omit<Todo, "checked" | "id">) => void;
}

type ToDoPanelProps = AddToDoPanelProps | EditToDoPanelProps;

export const ToDoPanel: React.FC<ToDoPanelProps> = (props) => {
    const isEdit = props.mode === "edit";

    const [todo, setTodo] = React.useState(
        isEdit ? props.editTodo : DEFAULT_TODO_ITEM
    );

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    };

    const onClick = () => {
        const todoItem = {
            name: todo.name,
            description: todo.description,
        };

        if (isEdit) {
            return props.changeTodo(todoItem);
        }

        props.addTodo(todoItem);
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
                {!isEdit && (
                    <Button color="blue" onClick={onClick}>
                        Add
                    </Button>
                )}

                {isEdit && (
                    <Button color="orange" onClick={onClick}>
                        Save
                    </Button>
                )}
            </div>
        </div>
    );
};
