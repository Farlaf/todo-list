import React from "react";
import { ToDoPanel } from "../ToDoPanel/ToDoPanel";
import { TodoItem } from "./TodoItem/TodoItem";

interface TodoListProps {
    todos: Todo[];
    todoIdForEdit: Todo["id"] | null;
    checkTodo: (id: Todo["id"]) => void;
    removeTodo: (id: Todo["id"]) => void;
    selectTodoIdForEdit: (id: Todo["id"]) => void;
    changeTodo: ({ name, description }: Omit<Todo, "checked" | "id">) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    checkTodo,
    removeTodo,
    selectTodoIdForEdit,
    changeTodo,
    todoIdForEdit,
}) => (
    <div>
        {todos.map((todo) => {
            if (todo.id === todoIdForEdit)
                return (
                    <ToDoPanel
                        mode="edit"
                        key={todo.id}
                        changeTodo={changeTodo}
                        editTodo={{
                            name: todo.name,
                            description: todo.description,
                        }}
                    />
                );

            return (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    checkTodo={checkTodo}
                    removeTodo={removeTodo}
                    selectTodoIdForEdit={selectTodoIdForEdit}
                />
            );
        })}
    </div>
);
