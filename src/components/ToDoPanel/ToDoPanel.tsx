import React from "react";
import { Button } from "../Button/Button";
import { useTodo } from "../../utils/contextes/useTodo";

import styles from "./ToDoPanel.module.css";

const DEFAULT_TODO_ITEM = {
    name: "",
    description: "",
};

interface AddToDoPanelProps {
    mode: "add";
}

interface EditToDoPanelProps {
    mode: "edit";
    editTodo: Omit<Todo, "id" | "checked">;
}

type ToDoPanelProps = AddToDoPanelProps | EditToDoPanelProps;

export const ToDoPanel: React.FC<ToDoPanelProps> = (props) => {
    const { changeTodo, addTodo } = useTodo();

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
            return changeTodo(todoItem);
        }

        addTodo(todoItem);
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
