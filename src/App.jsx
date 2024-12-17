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

    return (
        <div className="app-container">
            <h1 className="app-title"> My App </h1>
            <TodoForm onSubmit={addTask}/>
            <TodoList tasks={tasks} onDelete={removeTask}/>
        </div>
    );
}