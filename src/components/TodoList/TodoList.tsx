import React from "react";
import { TodoItem } from "./TodoItem/TodoItem";

interface TodoListProps {
    todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => (
    <div>
        {todos.map((todo) => (
            <TodoItem todo={todo} />
        ))}
    </div>
);
