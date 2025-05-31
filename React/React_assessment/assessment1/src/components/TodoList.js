import React from 'react';
import styles from './TodoList.Module.css'; // Import CSS module for styling

const TodoList = () => {
  const todos = ["Learn React", "Build a project", "Master JavaScript"]; // Hardcoded list of todo items

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Todo List</h2>
      {todos.length > 0 ? (
        <ul className={styles.todoList}>
          {todos.map((todo, index) => (
            <li key={index} className={styles.todoItem}>
              {todo}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.emptyMessage}>No todos available. Add some tasks!</p>
      )}
    </div>
  );
};

export default TodoList;