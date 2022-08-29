import React from "react";
import { TodoItem } from "./TodoItem/TodoItem";

interface TodoListProps {
    todos: Todo[];
    checkTodo: (id: Todo["id"]) => void;
    removeTodo: (id: Todo["id"]) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    checkTodo,
    removeTodo,
}) => (
    <div>
        {todos.map((todo) => (
            <TodoItem
                todo={todo}
                checkTodo={checkTodo}
                removeTodo={removeTodo}
            />
        ))}
    </div>
);
