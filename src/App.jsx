import React from 'react';
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

export default function App() {
    return (
        <div>
            <h1> My App </h1>
            <TodoForm />
            <TodoList />
        </div>
    );
}