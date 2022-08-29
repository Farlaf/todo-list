import React from "react";
import { ToDoPanel } from "../ToDoPanel/ToDoPanel";
import { TodoItem } from "./TodoItem/TodoItem";
import { useTodo } from "../../utils/contextes/useTodo";

export const TodoList: React.FC = () => {
    const { todos, todoIdForEdit, checkTodo, removeTodo, selectTodoIdForEdit } =
        useTodo();

    return (
        <div>
            {todos.map((todo) => {
                if (todo.id === todoIdForEdit)
                    return (
                        <ToDoPanel
                            mode="edit"
                            key={todo.id}
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
};
