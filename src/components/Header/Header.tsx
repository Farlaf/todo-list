import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
    todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => {
    return (
        <header className={styles.header_container}>
            <div className={styles.header_title}>
                ToDo list <b>{todoCount}</b> task(s)
            </div>
        </header>
    );
};
