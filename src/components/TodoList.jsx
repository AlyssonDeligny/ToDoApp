import React, { useState } from 'react';

export default function TodoList ({tasks, onDelete, onEdit, onToggle}){

    const [editingIndex, setEditingIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    return (
      <div>
        <h1 className="tasks-title"> My Tasks </h1>
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={index} className="todo-item">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(index)}
              />
              {editingIndex === index ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === 'Enter' &&
                    onEdit(index, editValue) & setEditingIndex(null)
                  }
                />
              ) : (
                <span
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                  }}
                >
                  {task.text}
                </span>
              )}

              {editingIndex === index ? (
                <button className="save-button"
                  onClick={() => {
                      onEdit(index, editValue);
                      setEditingIndex(null);
                  }
                  }
                >

                  Save
                </button>
              ) : (
                <>
                  <button className="edit-button"
                    onClick={() => {
                        setEditingIndex(index);
                        setEditValue(task.text);
                    }
                    }
                  >
                    Edit
                  </button>
                  <button className="delete-button" onClick={() => onDelete(index)}> Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
}