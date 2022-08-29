import React from "react";

export interface TodoContextProps {
    todos: Todo[];
    todoIdForEdit: Todo["id"] | null;
    addTodo: ({ name, description }: Omit<Todo, "checked" | "id">) => void;
    checkTodo: (id: Todo["id"]) => void;
    removeTodo: (id: Todo["id"]) => void;
    selectTodoIdForEdit: (id: Todo["id"]) => void;
    changeTodo: ({ name, description }: Omit<Todo, "checked" | "id">) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
    todos: [],
    todoIdForEdit: null,
    addTodo: () => {},
    checkTodo: () => {},
    removeTodo: () => {},
    selectTodoIdForEdit: () => {},
    changeTodo: () => {},
});
