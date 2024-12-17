import React from 'react';

export default function TodoForm() {
  return (
    <div className="todo-form">
      <form>
        <input type="text" placeholder="Add a new task" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}