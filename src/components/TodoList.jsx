import React from 'react';

export default function TodoList ({tasks, onDelete}){
    return(
        <div>
            <h1> My Tasks </h1>
            <ul className="todo-list">
                {tasks.map((task, index) => (
                    <li key={index} className="todo-item">
                        {task.text}
                        <button
                            className="delete-button"
                            onClick={() => onDelete(index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}