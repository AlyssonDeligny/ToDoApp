import React, { useState } from 'react';
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

export default function App() {

    const [tasks, setTasks] = useState([]);

    function addTask(task) {
        setTasks([...tasks, { text: task, completed: false }]);
    }
    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };
    const editTask = (index, newText) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, text: newText } : task
        );
        setTasks(updatedTasks);
    };
    const toggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="app-container">
            <h1 className="app-title"> To-Do List   </h1>
            <TodoForm onSubmit={addTask}/>
            <TodoList tasks={tasks} onDelete={removeTask} onEdit={editTask} onToggle={toggleTask}/>
        </div>
    );
}