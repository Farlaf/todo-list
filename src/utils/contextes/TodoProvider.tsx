import React from "react";
import { TodoContext } from "./TodoContext";

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

interface TodoProviderProps {
    children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [todos, setTodos] = React.useState(DEFAILT_TODO_LIST);
    const [todoIdForEdit, setTodoIdForEdit] = React.useState<Todo["id"] | null>(
        null
    );

    const selectTodoIdForEdit = (id: Todo["id"]) => {
        setTodoIdForEdit(id);
    };

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

    const checkTodo = (id: Todo["id"]) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, checked: !todo.checked };
                }

                return todo;
            })
        );
    };

    const removeTodo = (id: Todo["id"]) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const changeTodo = ({
        name,
        description,
    }: Omit<Todo, "checked" | "id">) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === todoIdForEdit) {
                    return { ...todo, name, description };
                }

                return todo;
            })
        );
        setTodoIdForEdit(null);
    };

    const value = React.useMemo(
        () => ({
            todos,
            todoIdForEdit,
            removeTodo,
            changeTodo,
            addTodo,
            selectTodoIdForEdit,
            checkTodo,
        }),
        [
            todos,
            todoIdForEdit,
            removeTodo,
            changeTodo,
            addTodo,
            selectTodoIdForEdit,
            checkTodo,
        ]
    );

    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    );
};
