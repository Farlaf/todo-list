import React from "react";
import { useTodo } from "../../utils/contextes/useTodo";

import styles from "./Header.module.css";

export const Header: React.FC = () => {
    const { todos } = useTodo();
    return (
        <header className={styles.header_container}>
            <div className={styles.header_title}>
                ToDo list <b>{todos.length}</b> task(s)
            </div>
        </header>
    );
};
