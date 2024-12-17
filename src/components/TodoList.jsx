import React, { useState } from 'react';

export default function TodoList ({tasks, onDelete, onEdit}){

    const [editingIndex, setEditingIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    return(
        <div>
            <h1> My Tasks </h1>
            <ul className="todo-list">
                {tasks.map((task, index) => (
                    <li key={index} className="todo-item">
                        {editingIndex === index ? (
                            <input
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && onEdit(index, editValue) & setEditingIndex(null)}
                            />
                        ) : (
                            <span>{task.text}</span>
                        )}

                        {editingIndex === index ? (
                            <button onClick={() => onEdit(index, editValue) & setEditingIndex(null)}> Save </button>
                        ) : (
                            <>
                                <button onClick={() => setEditingIndex(index) & setEditValue(task.text)}> Edit </button>
                                <button onClick={() => onDelete(index)}> Delete </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}